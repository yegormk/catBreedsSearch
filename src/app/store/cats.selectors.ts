import {catGalleryState, catImageData} from './cats.state';
import {createSelector} from '@ngrx/store';

export const selectCats = createSelector(
  (state: catGalleryState) => {
    return state.imageData;
  },
  (imageData: catImageData) => imageData
);

export const selectBreeds = createSelector(
  (state: catGalleryState) => {
    return state.listOfBreeds;
  },
  (breedsData: catImageData) => breedsData
);

