/**
 * Tiny class-name helper. Filters out falsy values and joins the rest.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}
