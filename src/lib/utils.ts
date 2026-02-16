import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge multiple class values into a single string using tailwind-merge.
 * Useful for combining utility classes from tailwindcss with component-specific classes.
 * @example
 * cn('text-lg', 'font-bold') // 'text-lg font-bold'
 * @param {ClassValue[]} inputs - Class values to merge
 * @returns {string} - The merged class value string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
