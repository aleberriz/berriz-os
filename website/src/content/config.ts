import { defineCollection, z } from 'astro:content';

const cards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tag: z.string().optional(),
  }),
});

export const collections = { cards };
