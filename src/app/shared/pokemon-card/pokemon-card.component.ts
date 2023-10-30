import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Pokemon } from "src/app/shared/models/pokemon";
import { RouterModule } from "@angular/router";

@Component({
  selector: "pokemon-card",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Input() index!: number;
  constructor() {}
}
