/**
 * Optional URLs for About and Writing. Set in Cloudflare Pages → Settings → Environment variables
 * (Production) with the PUBLIC_ prefix so Astro inlines them at build time.
 */
export const siteConfig = {
  githubProfile: 'https://github.com/aleberriz',
  linkedinUrl: import.meta.env.PUBLIC_LINKEDIN_URL ?? '',
  /** Subscribe or archive page for *The Intelligence Layer* */
  kitNewsletterUrl: import.meta.env.PUBLIC_KIT_NEWSLETTER_URL ?? '',
  /** Kit (or other) RSS URL — when set, /writing fetches issues at build time */
  kitNewsletterRss: import.meta.env.PUBLIC_KIT_NEWSLETTER_RSS ?? '',
} as const;
