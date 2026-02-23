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

/**
 * Convert a given string to its slug equivalent.
 * This function uses regex to replace special characters in Vietnamese language with their corresponding Latin characters.
 * It also removes all special characters and replaces whitespace with dashes.
 * @param {string} str - The string to convert to its slug equivalent
 * @returns {string} - The slug equivalent of the given string
 */
export function slugify(str: string) {
  if (!str) return "";
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Remove special characters
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return str;
}

/**
 * Format a given price in VND currency using the Intl.NumberFormat API.
 * @example
 * formatPrice(12345) // "123,450 VND"
 * @param {number} price - The price to format
 * @returns {string} - The formatted price string
 */
export function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
