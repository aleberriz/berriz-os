/**
 * Optional URLs for About and Writing. Set in Cloudflare Pages → Settings → Environment variables
 * (Production) with the PUBLIC_ prefix so Astro inlines them at build time.
 */
export const siteConfig = {
  githubProfile: 'https://github.com/aleberriz',
  linkedinUrl: 'https://www.linkedin.com/in/berriz/',
  /** Published writing — linked from /writing and /about */
  ieBlogPostUrl: 'https://www.ie.edu/lifelong-learning/blog/data-science/lets-obliterate-called-tech-vs-business-gap-bootcamp-diary-alejandro-berrizbeitia/',
  /** Subscribe or archive page for *The Trade-off* — not yet launched */
  kitNewsletterUrl: import.meta.env.PUBLIC_KIT_NEWSLETTER_URL ?? '',
  /** Kit (or other) RSS URL — when set, /writing fetches issues at build time */
  kitNewsletterRss: import.meta.env.PUBLIC_KIT_NEWSLETTER_RSS ?? '',
} as const;
