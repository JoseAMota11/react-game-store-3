export interface Game {
  count: number | null;
  page: number | null;
  page_size: number | null;
  description: string | null;
  filters: object[];
  nofollow: boolean;
  nofollow_collections: string[] | null;
  seo_description: string | null;
  seo_h1: string | null;
  seo_keywords: string | null;
  seo_title: string | null;
  next: string | null;
  previous: string | null;
  results: object[];
}
