import {createAction, props} from '@ngrx/store';
import {catImage} from "./cats.state";

export const loadImages = createAction(
  '[Cats] Get Images',
  props<{
    limit: string,
    breed: string
  }>()
);

export const loadedImages = createAction(
  '[Cats] Images Loaded',
  props<{ imageResponse: catImage[] }>()
);

export const imagesNotLoaded = createAction(
  '[Cat Gallery] Images Loaded',
  props<{ error: string }>()
);

export const loadListOfBreeds = createAction(
  '[Cats] Get List of Breeds',
);

export const loadedListOfBreeds = createAction(
  '[Cats] Got List of Breeds',
  props<{ listOfBreedsResponse: catImage[] }>()
);

export const listOfBreedsNotLoaded = createAction(
  '[Cat] List of Breeds not loaded',
  props<{ error: string }>()
);


