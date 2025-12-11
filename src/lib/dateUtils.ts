/**
 * Format an ISO date string consistently across server and client.
 * This avoids hydration mismatches caused by timezone differences.
 * 
 * The key is to parse the date and format it in a way that's consistent
 * regardless of the client's timezone.
 */
export function formatDateUTC(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  // Parse the ISO string and create a date
  const date = new Date(dateString);
  
  // Format using UTC to ensure consistency across timezones
  return new Intl.DateTimeFormat('en-US', {
    ...options,
    timeZone: 'UTC',
  }).format(date);
}
