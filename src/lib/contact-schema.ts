/**
 * Shared, dependency-free validation for the contact form.
 * Used on the client (instant feedback) and the server (source of truth).
 */
export interface ContactInput {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  /** Honeypot — must stay empty. */
  website?: string;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: Partial<ContactInput>): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const subject = input.subject?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > 80) errors.name = "That name is a little long.";

  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";

  if (subject.length < 2) errors.subject = "Please add a subject.";
  else if (subject.length > 120) errors.subject = "Subject is too long.";

  if (message.length < 10)
    errors.message = "A little more detail, please (10+ characters).";
  else if (message.length > 4000)
    errors.message = "Message exceeds 4000 characters.";

  if ((input.company?.length ?? 0) > 120)
    errors.company = "Company name is too long.";

  return errors;
}
