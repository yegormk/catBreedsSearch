import {createReducer, on} from '@ngrx/store';
import {CatImageData} from './cats.state';
import * as CatGalleryActions from './cats.actions';

const initialState: CatImageData = {
  pending: false,
  error: '',
  images: [],
};

export const loadingImages = createReducer(
  initialState,
  on(CatGalleryActions.LoadImages, (state, {limit, breed}) => {
    return {
      ...state,
      pending: true,
      images: [],
    };
  }),
  on(CatGalleryActions.LoadedImages, (state, {imageResponse}) => {
    return {
      ...state,
      pending: false,
      images: imageResponse,
    };
  }),
)

export const loadingListOfBreeds = createReducer(
  initialState,
  on(CatGalleryActions.LoadListOfBreeds, (state) => {
    return {
      ...state,
      pending: true,
      images: [],
    };
  }),
  on(CatGalleryActions.LoadedListOfBreeds,
    (state, {listOfBreedsResponse}) => {
      return {
        ...state,
        pending: false,
        images: listOfBreedsResponse,
      };
    }),
)

