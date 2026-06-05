"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import {
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/contact-schema";
import { contact } from "@/config/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * On static hosting (e.g. GitHub Pages) there is no `/api/contact` server
 * route, so the build sets NEXT_PUBLIC_CONTACT_MODE=mailto and the form
 * composes an email instead of POSTing. Defaults to the API route otherwise.
 */
const CONTACT_MODE = process.env.NEXT_PUBLIC_CONTACT_MODE ?? "api";

const empty: ContactInput = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof ContactInput>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);

    const validation = validateContact(values);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    // Static hosting: no server route — hand off to the user's email client.
    if (CONTACT_MODE === "mailto") {
      const lines = [
        values.message,
        "",
        `— ${values.name}${values.company ? ` · ${values.company}` : ""}`,
        values.email,
      ];
      const params = new URLSearchParams({
        subject: values.subject,
        body: lines.join("\n"),
      });
      window.location.href = `mailto:${contact.email}?${params.toString()}`;
      setStatus("success");
      setValues(empty);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("success");
        setValues(empty);
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data.errors) setErrors(data.errors as ContactErrors);
      setServerError(
        data.error ?? "Something went wrong. Please try again or email me.",
      );
      setStatus("error");
    } catch {
      setServerError("Network error. Please try again or email me directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-line bg-surface/40 px-8 py-16 text-center edge-highlight"
      >
        <span className="flex size-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
          <CheckIcon className="size-7 text-accent-soft" />
        </span>
        <div>
          <h3 className="text-h3 font-semibold tracking-tight text-ink">
            Message sent
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-pretty text-ink-muted">
            Thanks for reaching out — I&apos;ll get back to you soon.{" "}
            {contact.responseTime}.
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => update("name", v)}
          placeholder="Ada Lovelace"
          autoComplete="name"
        />
        <Field
          label="Email"
          required
          type="email"
          error={errors.email}
          value={values.email}
          onChange={(v) => update("email", v)}
          placeholder="ada@example.com"
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Company"
          optional
          error={errors.company}
          value={values.company ?? ""}
          onChange={(v) => update("company", v)}
          placeholder="Optional"
          autoComplete="organization"
        />
        <SubjectField
          value={values.subject}
          error={errors.subject}
          onChange={(v) => update("subject", v)}
        />
      </div>

      <Field
        label="Message"
        required
        multiline
        error={errors.message}
        value={values.message}
        onChange={(v) => update("message", v)}
        placeholder="Tell me about your project, role, or idea…"
      />

      {/* Honeypot — hidden from humans */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-faint">
          {contact.responseTime}. Your details are never shared.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" && (
            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          )}
        </Button>
      </div>

      <AnimatePresence>
        {serverError && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            {serverError}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  optional?: boolean;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  autoComplete?: string;
}

function Field({
  label,
  value,
  onChange,
  error,
  required,
  optional,
  type = "text",
  placeholder,
  multiline,
  autoComplete,
}: FieldProps) {
  const id = label.toLowerCase();
  const base =
    "w-full rounded-xl border bg-surface/40 px-4 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus:outline-none focus:ring-0";
  const ring = error
    ? "border-red-500/50 focus:border-red-500/70"
    : "border-line focus:border-line-strong";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-sm font-medium text-ink-soft"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-ink-faint">Optional</span>
        )}
        {required && <span className="text-accent-soft">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={6}
          className={cn(base, ring, "resize-none py-3 leading-relaxed")}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn(base, ring, "h-12")}
          aria-invalid={!!error}
        />
      )}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

function SubjectField({
  value,
  error,
  onChange,
}: {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="subject"
        className="flex items-center gap-2 text-sm font-medium text-ink-soft"
      >
        Subject <span className="text-accent-soft">*</span>
      </label>
      <input
        id="subject"
        list="subject-presets"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="What's this about?"
        className={cn(
          "h-12 w-full rounded-xl border bg-surface/40 px-4 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus:outline-none",
          error
            ? "border-red-500/50 focus:border-red-500/70"
            : "border-line focus:border-line-strong",
        )}
        aria-invalid={!!error}
      />
      <datalist id="subject-presets">
        {contact.subjects.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
