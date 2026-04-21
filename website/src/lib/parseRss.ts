/** Minimal RSS 2.0 item parse for build-time newsletter lists (no extra dependencies). */
export type RssItem = { title: string; link: string; pubDate?: string };

export function parseRssItems(xml: string, limit = 30): RssItem[] {
  const out: RssItem[] = [];
  const itemBlocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];
  for (const block of itemBlocks.slice(0, limit)) {
    const title =
      matchOne(block, /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/i)?.[1]?.trim() ??
      matchOne(block, /<title>([^<]*)<\/title>/i)?.[1]?.trim() ??
      '';
    const link =
      matchOne(block, /<link>([^<]+)<\/link>/i)?.[1]?.trim() ??
      matchOne(block, /<guid[^>]*>([^<]+)<\/guid>/i)?.[1]?.trim() ??
      '';
    const pubDate = matchOne(block, /<pubDate>([^<]+)<\/pubDate>/i)?.[1]?.trim();
    if (title && link) out.push({ title, link, pubDate });
  }
  return out;
}

function matchOne(s: string, re: RegExp): RegExpMatchArray | null {
  const m = s.match(re);
  return m ?? null;
}
