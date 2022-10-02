import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Store} from '@ngrx/store';
import {map, Observable} from "rxjs";

import {catGalleryState, catImageData} from "./store/cats.state";
import {selectBreeds} from "./store/cats.selectors";

@Injectable({providedIn: 'root'})
export class MainResolver implements Resolve<boolean> {
  constructor(private store: Store<catGalleryState>) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.select(selectBreeds)
      .pipe(
        map((listOfBreeds: catImageData) => !listOfBreeds.pending));
  }
}
