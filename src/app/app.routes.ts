import { Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon/pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail/pokemon-detail.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "list" },
  {
    path: "list",
    component: PokemonListComponent,
  },
  {
    path: "list/:id",
    component: PokemonDetailComponent,
  },
];
