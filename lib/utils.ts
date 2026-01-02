import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes.
 * Combines clsx and tailwind-merge to handle class conflicts properly.
 *
 * @example
 * ```ts
 * cn("px-2 py-1", "px-4") // Returns "py-1 px-4"
 * cn("bg-red-500", condition && "bg-blue-500") // Returns appropriate class
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with thousand separators.
 *
 * @example
 * ```ts
 * formatNumber(1234) // "1,234"
 * formatNumber(1234567) // "1,234,567"
 * ```
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat().format(value);
}

/**
 * Formats a date to a readable string.
 *
 * @example
 * ```ts
 * formatDate(new Date()) // "Jan 1, 2024"
 * formatDate(new Date(), "long") // "January 1, 2024"
 * ```
 */
export function formatDate(
  date: Date | string | number,
  style: "short" | "long" | "medium" = "medium"
): string {
  const dateObj =
    typeof date === "string" || typeof date === "number"
      ? new Date(date)
      : date;

  const optionsMap: Record<
    "short" | "long" | "medium",
    Intl.DateTimeFormatOptions
  > = {
    short: { month: "short", day: "numeric", year: "numeric" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
  };
  const options = optionsMap[style];

  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

/**
 * Debounce function to limit the rate of function calls.
 *
 * @example
 * ```ts
 * const debouncedSearch = debounce((query: string) => {
 *   console.log("Searching for:", query);
 * }, 300);
 *
 * debouncedSearch("react");
 * ```
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Validates an email address.
 *
 * @example
 * ```ts
 * isValidEmail("user@example.com") // true
 * isValidEmail("invalid-email") // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Truncates a string to a specified length with ellipsis.
 *
 * @example
 * ```ts
 * truncate("This is a long string", 10) // "This is a..."
 * ```
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}
