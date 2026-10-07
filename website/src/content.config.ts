import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cards = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cards' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    /** Path to an image in /public (e.g. /field-notes/my-meme.png). Shown large between summary and body. */
    image: z.string().optional(),
    /** Alt text for the image. Required if image is set. */
    imageAlt: z.string().optional(),
    /** Pins the card to the top of the index, above the date-sorted rest. */
    featured: z.boolean().optional().default(false),
    /** When 'bare', the card renders without the standard site chrome. Use .mdx and define your own page structure. (Named 'display', not 'layout' — MDX reserves 'layout' in frontmatter.) */
    display: z.enum(['default', 'bare']).optional().default('default'),
    /** Series key for grouped notes (e.g. 'opgov-flashcards'). Drives the index grouping on /field-notes/. */
    series: z.string().optional(),
  }),
});

export const collections = { cards };
