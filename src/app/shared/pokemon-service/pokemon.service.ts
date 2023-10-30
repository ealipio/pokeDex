import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap, forkJoin } from "rxjs";
import { PageResponse, PokeListItem } from "src/app/shared/models/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";
  private defaultPageUrl = `${this.apiUrl}?offset=1&limit=10`;

  constructor(private http: HttpClient) {}

  getByPage(url = this.defaultPageUrl): Observable<PageResponse> {
    const newUrl = new URL(url);
    const offset = newUrl.searchParams.get("offset");

    const apiUrl = Number(offset) ? url : this.defaultPageUrl;

    return this.http.get<PageResponse>(apiUrl).pipe(
      mergeMap((response: PageResponse) => {
        const requests: Observable<PokeListItem>[] = response.results.map(
          (pokemon: PokeListItem) =>
            this.http.get<PokeListItem>(pokemon.url).pipe(
              map((details) => {
                return {
                  ...pokemon,
                  ...details,
                };
              }),
            ),
        );

        return forkJoin(requests).pipe(
          map((pokemonDetails) => {
            return {
              ...response,
              results: pokemonDetails,
            };
          }),
        );
      }),
    );
  }

  getById(name: string): Observable<PokeListItem> {
    return this.http.get<PokeListItem>(`${this.apiUrl}/${name}`).pipe(
      mergeMap((response) => {
        return this.http.get<any>(response.species?.url ?? "").pipe(
          mergeMap((specie) => {
            return this.http.get<any>(specie.evolution_chain.url).pipe(
              map((item) => {
                return {
                  ...response,
                  evolution: {
                    previousEvolution: item.chain.evolves_to.at().species.name,
                    base: item.chain.species.name,
                    fullyEvolved: item.chain.evolves_to.at().evolves_to.at()
                      .species.name,
                  },
                };
              }),
            );
          }),
        );
      }),
    );
  }
}
