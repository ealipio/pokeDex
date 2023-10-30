import { Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon/pokemon-list/pokemon-list.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "list" },
  {
    path: "list",
    component: PokemonListComponent,
  },
  {
    path: "details/:name",
    loadComponent: () =>
      import("./pokemon/pokemon-view/pokemon-view.component").then(
        (mod) => mod.PokemonViewComponent,
      ),
  },
];
