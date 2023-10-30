import { Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon/pokemon-list/pokemon-list.component";
import { PokemonViewComponent } from "./pokemon/pokemon-view/pokemon-view.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "list" },
  {
    path: "list",
    component: PokemonListComponent,
  },
  {
    path: "details/:index",
    loadComponent: () =>
      import("./pokemon/pokemon-view/pokemon-view.component").then(
        (mod) => mod.PokemonViewComponent,
      ),
  },
];
