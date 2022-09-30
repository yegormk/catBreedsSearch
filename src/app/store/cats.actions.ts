import {createAction, props} from '@ngrx/store';
import {CatImage} from "./cats.state";

export const LoadImages = createAction(
  '[Cats] Get Images',
  props<{
    limit: string,
    breed: string
  }>()
);

export const LoadedImages = createAction(
  '[Cats] Images Loaded',
  props<{ imageResponse: CatImage[] }>()
);

export const ImagesNotLoaded = createAction(
  '[Cat Gallery] Images Loaded',
  props<{ error: string }>()
);

export const LoadListOfBreeds = createAction(
  '[Cats] Get List of Breeds',
);

export const LoadedListOfBreeds = createAction(
  '[Cats] Got List of Breeds',
  props<{ listOfBreedsResponse: CatImage[] }>()
)

export const ListOfBreedsNotLoaded = createAction(
  '[Cat] List of Breeds not loaded',
  props<{ error: string }>()
)


