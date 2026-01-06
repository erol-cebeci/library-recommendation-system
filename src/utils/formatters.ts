/**
 * Utility functions for formatting data
 */

/**
 * Formats an ISO date string to a readable format
 * @param isoString - ISO 8601 date string
 * @returns Formatted date string (e.g., "Jan 15, 2024")
 */
export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Formats a rating to one decimal place
 * @param rating - Numeric rating value
 * @returns Formatted rating string (e.g., "4.5")
 */
export function formatRating(rating: number | null | undefined): string {
  if (typeof rating !== 'number' || !isFinite(rating) || rating === 0) {
    return '0.0'; // Return a safe default value if the rating is missing or invalid
  }
  return rating.toFixed(1);
}

/**
 * Truncates text to a specified length and adds ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength).trim() + '...';
}
