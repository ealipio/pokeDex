import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokeListItem } from "src/app/shared/models/pokemon";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-pokemon-card",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent {
  @Input() pokemon!: PokeListItem;
}
