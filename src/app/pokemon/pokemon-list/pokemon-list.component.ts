import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonCardComponent } from "src/app/shared/pokemon-card/pokemon-card.component";

@Component({
  selector: "pokemon-list",
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"],
})
export class PokemonListComponent {}
