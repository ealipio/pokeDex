import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonCardComponent } from "src/app/shared/pokemon-card/pokemon-card.component";
import { PokemonService } from "src/app/shared/pokemon-service/pokemon.service";
import { PageResponse, PokeListItem } from "src/app/shared/models/pokemon";
import { Observable } from "rxjs";

@Component({
  selector: "pokemon-list",
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"],
})
export class PokemonListComponent implements OnInit {
  pokemonList$?: Observable<PageResponse>;
  pokemons$?: Observable<PokeListItem[]>;
  pokemonsData$?: Observable<any>;

  constructor(readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.getByPage();
  }

  changePage(url: string) {
    if (url) {
      const newUrl = new URL(url);
      const params = newUrl.searchParams;
      const offset = params.get("offset");
      const limit = params.get("limit");

      this.pokemonList$ = this.pokemonService.getByPage(
        offset ?? "1",
        limit ?? "2",
      );
    }
  }
}
