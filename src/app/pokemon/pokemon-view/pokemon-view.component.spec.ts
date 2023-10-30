// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PokemonViewComponent } from './pokemon-view.component';

// describe('PokemonViewComponent', () => {
//   let component: PokemonViewComponent;
//   let fixture: ComponentFixture<PokemonViewComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [PokemonViewComponent]
//     });
//     fixture = TestBed.createComponent(PokemonViewComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonViewComponent } from "./pokemon-view.component";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { PokeListItem } from "src/app/shared/models/pokemon";
import { PokemonService } from "src/app/shared/pokemon-service/pokemon.service";

describe("PokemonViewComponent", () => {
  let component: PokemonViewComponent;
  let fixture: ComponentFixture<PokemonViewComponent>;
  let mockPokemonService: jasmine.SpyObj<any>;
  let mockActivatedRoute: any;

  beforeEach(() => {
    mockPokemonService = jasmine.createSpyObj("PokemonService", ["getById"]);

    TestBed.configureTestingModule({
      declarations: [PokemonViewComponent],
      providers: [
        { provide: PokemonService, useValue: mockPokemonService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: (param: string) => "pikachu" } },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(PokemonViewComponent);
    component = fixture.componentInstance;
    mockActivatedRoute = TestBed.inject(ActivatedRoute);
  });

  xit("should create", () => {
    expect(component).toBeTruthy();
  });

  xit("should fetch pokemon details on initialization", () => {
    const mockPokeListItem: PokeListItem = {
      name: "Pikachu",
      url: "dsd",
    };

    mockPokemonService.getById.and.returnValue(of(mockPokeListItem));

    fixture.detectChanges();

    expect(component.pokemon$).toEqual(of(mockPokeListItem));
  });
});
