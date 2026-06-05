/**
 * Minimal, dependency-free class-name joiner (clsx-compatible subset).
 * Supports strings, numbers, arrays, and objects of { className: boolean }.
 */
export type ClassValue =
  | string
  | number
  | null
  | boolean
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

export function clsx(...inputs: ClassValue[]): string {
  const out: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
    } else if (Array.isArray(input)) {
      const inner = clsx(...input);
      if (inner) out.push(inner);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) out.push(key);
      }
    }
  }

  return out.join(" ");
}
