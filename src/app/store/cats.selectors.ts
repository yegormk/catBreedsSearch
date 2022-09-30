import {CatGalleryState, CatImageData} from './cats.state';
import {createSelector} from '@ngrx/store';

export const selectCats = createSelector(
  (state: CatGalleryState) => {
    return state.imageData;
  },
  (imageData: CatImageData) => imageData
);

export const selectBreeds = createSelector(
  (state: CatGalleryState) => {
    return state.listOfBreeds;
  },
  (breedsData: CatImageData) => breedsData
);

