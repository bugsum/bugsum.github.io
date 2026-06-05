import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-sm tracking-widest text-accent-soft">
        404
      </p>
      <h1 className="mt-4 text-balance text-h1 font-semibold tracking-tight text-shine">
        This page wandered off
      </h1>
      <p className="mt-4 max-w-md text-pretty text-lg text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Button href="/">
          <ArrowLeftIcon className="size-4" />
          Back home
        </Button>
        <Button href="/projects" variant="secondary">
          View projects
        </Button>
      </div>
    </Container>
  );
}
