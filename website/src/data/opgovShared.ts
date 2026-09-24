/**
 * Shared types and constants for the Operational Governance Knowledge
 * Flashcards series. See opgovFlashcards.ts for the series documentation.
 *
 * Sections follow the original slide breakdown: "What is it" / "When is it
 * useful" / "How to use it" / "Common pitfalls" / "References and
 * resources". Sections a deck did not have are simply omitted.
 *
 * Inline markup inside text: **bold**, *italic*, `code`,
 * [label](https://example.com).
 */

/** One cell of a `quadrant` diagram block; array order is [top-left, top-right, bottom-left, bottom-right]. */
export interface QuadrantCell {
  heading: string;
  items?: string[];
  text?: string;
}

/** One step of a `stages` diagram block — a vertical flow of numbered stages. */
export interface Stage {
  label: string;
  text?: string;
}

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'quote'; text: string; source?: string }
  | { kind: 'note'; text: string }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'sub'; heading: string; blocks: Block[] }
  /** A redrawn 2x2 diagram (SWOT quadrants, Eisenhower matrix, etc). */
  | {
      kind: 'quadrant';
      colLabels?: [string, string];
      rowLabels?: [string, string];
      cells: [QuadrantCell, QuadrantCell, QuadrantCell, QuadrantCell];
    }
  /** A redrawn vertical flow of stages (a cycle, a sprint, a process). */
  | { kind: 'stages'; steps: Stage[]; loop?: boolean; loopLabel?: string }
  /** The box-and-whisker anatomy diagram, redrawn for the Box Plot Charts card. */
  | { kind: 'boxplot' }
  /** A legend of shapes and their meaning, redrawn for the Flowcharts card. */
  | {
      kind: 'shapes';
      items: { shape: 'oval' | 'rect' | 'diamond' | 'parallelogram'; label: string; desc: string }[];
    };

export interface Byline {
  name: string;
  url?: string;
}

export interface Section {
  heading: string;
  blocks: Block[];
}

export interface OpGovCard {
  /** Position in the series, printed on the card ("No. 01/19"). */
  number: number;
  title: string;
  /** Shown in the card footer, e.g. "July 2021". */
  originalDate: string;
  bylines?: Byline[];
  sections: Section[];
}

export const WHAT = 'What is it';
export const WHEN = 'When is it useful';
export const HOW = 'How to use it';
export const PITFALLS = 'Common pitfalls';
export const REFS = 'References and resources';

/**
 * Bylines as on the original slides. Colleagues get their LinkedIn profile;
 * internal-only links from the original decks (internal Tableau, Google
 * Drives, internal docs) were dropped on purpose.
 */
export const JAIME: Byline = {
  name: 'Javier Martínez',
  url: 'https://www.linkedin.com/in/javier-mart%C3%ADnez-elizalde-5ba227157/',
};
export const FER: Byline = {
  name: 'Fer Salama',
  url: 'https://www.linkedin.com/in/mariasalama/',
};
export const THIAGO: Byline = {
  name: 'Thiago Karam',
  url: 'https://www.linkedin.com/in/thiago-karam-32389718b/',
};
export const VERONICA: Byline = {
  name: 'Verónica Rodríguez',
  url: 'https://www.linkedin.com/in/veronica1986linweile/',
};
export const ALE: Byline = { name: 'A. Berrizbeitia' };
