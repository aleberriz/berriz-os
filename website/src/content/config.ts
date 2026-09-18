import { defineCollection, z } from 'astro:content';

const cards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tag: z.string().optional(),
    /** Path to an image in /public (e.g. /field-notes/my-meme.png). Shown large between summary and body. */
    image: z.string().optional(),
    /** Alt text for the image. Required if image is set. */
    imageAlt: z.string().optional(),
    /** When 'bare', the card renders without the standard site layout. Use .mdx and define your own page structure. */
    layout: z.enum(['default', 'bare']).optional().default('default'),
  }),
});

export const collections = { cards };
