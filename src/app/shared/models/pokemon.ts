export interface Pokemon {
  name: string;
}

export interface PokeList {
  name: string;
  url: string;
}

export interface PageResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeList;
}
