import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PageResponse, Pokemon } from "src/app/shared/models/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  pokemons: Pokemon[] = [{ name: "Pikachu" }, { name: "Charmander" }];
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) {}

  getByPage(): Observable<PageResponse> {
    // https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
    const params = new HttpParams().set("offset", "20").set("limit", "20");
    return this.http.get<PageResponse>(this.apiUrl, { params });
  }

  getById() {
    // https://pokeapi.co/api/v2/pokemon/25/
  }

  getDescription() {}
}
