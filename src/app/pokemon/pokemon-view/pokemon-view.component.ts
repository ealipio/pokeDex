import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable, map } from "rxjs";
import { Pokemon } from "../../shared/models/pokemon";
import { PokemonService } from "../../shared/pokemon-service/pokemon.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pokemon-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pokemon-view.component.html",
  styleUrls: ["./pokemon-view.component.css"],
})
export class PokemonViewComponent implements OnInit {
  pokemon$?: Observable<Pokemon>;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      map((params) => {
        return this.pokemonService.pokemons[Number(params.get("index"))];
      }),
    );
  }
}
