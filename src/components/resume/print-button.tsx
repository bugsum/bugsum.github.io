"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@/components/icons";

export function PrintButton() {
  return (
    <Button onClick={() => window.print()} size="md">
      <DownloadIcon className="size-4" />
      Download PDF
    </Button>
  );
}
