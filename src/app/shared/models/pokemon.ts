export type PokeDetails = {
  sprites: { front_default: string };
};
export type PokeListItem = Partial<PokeDetails> & {
  name: string;
  url: string;
};

export interface PageResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeListItem[];
}
