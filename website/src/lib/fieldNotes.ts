import type { CollectionEntry } from 'astro:content';

/**
 * Canonical ordering for field notes: pinned cards first, then newest first.
 *
 * Both the index and the prev/next navigation use this, so the "next" link
 * always matches the order the reader saw on the index page.
 */
export function byFeaturedThenDate(
  a: CollectionEntry<'cards'>,
  b: CollectionEntry<'cards'>,
): number {
  return (
    Number(b.data.featured) - Number(a.data.featured) ||
    b.data.date.getTime() - a.data.date.getTime()
  );
}
