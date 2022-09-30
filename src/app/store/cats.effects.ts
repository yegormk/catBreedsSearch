import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {EMPTY} from "rxjs";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import * as CatGalleryActions from "./cats.actions";
import {CatsService} from "../service/cats.service";


@Injectable()
export class CatGalleryEffects {
  constructor(private actions$: Actions, private catsService: CatsService) { }

  public loadImages$ = createEffect(() => this.actions$.pipe(
    ofType(CatGalleryActions.LoadImages),
    tap(x => console.log('Effect working!')),
    mergeMap((action) => this.catsService.getBreed(action.breed, action.limit)
      .pipe(
        map(response => CatGalleryActions.LoadedImages({imageResponse: response})),
        catchError(() => EMPTY)
      )
    )
  ));

  public loadListOfBreeds = createEffect(() => this.actions$.pipe(
    ofType(CatGalleryActions.LoadListOfBreeds),
    tap(x => console.log('Loading list of breeds!')),
    mergeMap((action) => this.catsService.getBreeds()
      .pipe(
        map(response => CatGalleryActions.LoadedListOfBreeds({listOfBreedsResponse: response})),
        catchError(() => EMPTY)
      )
    )
  ));
}

