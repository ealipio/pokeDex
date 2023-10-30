export type PokeDetails = {
  sprites: { front_default: string };
  species: { name: string; url: string };
  evolution: { previousEvolution: string; fullyEvolved: string; base: string };
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
