import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap, forkJoin } from "rxjs";
import { PageResponse, PokeListItem } from "src/app/shared/models/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) {}

  getByPage(
    offset: string = "1",
    limit: string = "2",
  ): Observable<PageResponse> {
    const params = new HttpParams().set("offset", offset).set("limit", limit);

    return this.http.get<PageResponse>(this.apiUrl, { params }).pipe(
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
            console.log(pokemonDetails);

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
    return this.http
      .get<PokeListItem>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((response) => {
          console.log(response);

          return response;
        }),
      );
  }

  // https://pokeapi.co/api/v2/evolution-chain/1/
}
