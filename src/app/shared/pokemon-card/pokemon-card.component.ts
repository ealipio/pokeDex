import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "pokemon-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent {}
