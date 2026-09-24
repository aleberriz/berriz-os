/**
 * Operational Governance Knowledge Flashcards — the series.
 *
 * One entry per flashcard deck from the original PowerPoint archive
 * (2019–2023), republished as bare field notes. Every card is rendered by
 * the shared OpGovFlashcard component, so the whole set reads as one uniform
 * deck — the deliberate exception to the "bare notes don't share a house
 * style" rule in website/README.md.
 *
 * Conventions:
 *   - Sections follow the original slide breakdown, in the original order.
 *   - Cabify-internal links (internal Tableau, Google Drives, internal
 *     docs) were dropped on purpose; only public references are kept.
 *   - Bylines credit the original authors as on the slides.
 *
 * The entry keys are the card slugs and must match the MDX files in
 * src/content/cards/.
 */
import { OpGovCard } from './opgovShared';
import { cardsA } from './opgovCardsA';
import { cardsB } from './opgovCardsB';

export type { Block, Byline, Section, OpGovCard } from './opgovShared';

export const OPGOV_TOTAL = 19;

export const opgovCards: Record<string, OpGovCard> = {
  ...cardsA,
  ...cardsB,
};
