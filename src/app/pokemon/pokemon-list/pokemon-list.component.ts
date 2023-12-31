import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonCardComponent } from "src/app/shared/pokemon-card/pokemon-card.component";
import { PokemonService } from "src/app/shared/pokemon-service/pokemon.service";
import { PageResponse } from "src/app/shared/models/pokemon";
import { Observable } from "rxjs";

@Component({
  selector: "app-pokemon-list",
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"],
})
export class PokemonListComponent implements OnInit {
  pokemonList$?: Observable<PageResponse>;

  constructor(readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.getByPage();
  }

  changePage(url: string) {
    if (url) {
      this.pokemonList$ = this.pokemonService.getByPage(url);
    }
  }
}
