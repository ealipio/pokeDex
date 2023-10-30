import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable, switchMap } from "rxjs";
import { PokemonService } from "../../shared/pokemon-service/pokemon.service";
import { ActivatedRoute } from "@angular/router";
import { PokeListItem } from "src/app/shared/models/pokemon";

@Component({
  selector: "app-pokemon-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pokemon-view.component.html",
  styleUrls: ["./pokemon-view.component.css"],
})
export class PokemonViewComponent implements OnInit {
  pokemon$?: Observable<PokeListItem>;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const name = params.get("name") ?? "";
        return this.pokemonService.getById(name);
      }),
    );
  }
}
