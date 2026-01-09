/**
 * Analytics utility for tracking GA4 events
 * Provides a centralized way to send events to Google Analytics
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export interface GAEventParams {
  event: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

/**
 * Sends an event to Google Analytics
 * Safely handles cases where gtag or dataLayer may not be available yet
 *
 * @param params - Event parameters
 * @example
 * trackEvent({
 *   event: 'button_click',
 *   category: 'engagement',
 *   label: 'signup_button'
 * })
 */
export function trackEvent(params: GAEventParams): void {
  if (typeof window === "undefined") return;

  const { event, category, label, value, ...rest } = params;

  const eventData: Record<string, string | number | undefined> = {
    ...(category && { event_category: category }),
    ...(label && { event_label: label }),
    ...(value && { value }),
    ...rest,
  };

  // Try to use gtag if available
  const gtag = window.gtag;
  if (typeof gtag === "function") {
    gtag("event", event, eventData);
  }

  // Always push to dataLayer as fallback
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...eventData,
  });
}

/**
 * Tracks a page view event
 * @param pagePath - The page path to track
 * @param pageTitle - Optional page title
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  trackEvent({
    event: "page_view",
    page_path: pagePath,
    ...(pageTitle && { page_title: pageTitle }),
  });
}

/**
 * Tracks a conversion event (e.g., form submission, purchase)
 * @param conversionType - Type of conversion (e.g., 'form_submit', 'purchase')
 * @param value - Optional monetary value
 */
export function trackConversion(
  conversionType: string,
  value?: number
): void {
  trackEvent({
    event: conversionType,
    category: "conversion",
    ...(value && { value }),
  });
}
