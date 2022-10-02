import {createReducer, on} from '@ngrx/store';
import {catImageData} from './cats.state';
import * as CatGalleryActions from './cats.actions';

const initialState: catImageData = {
  pending: false,
  error: '',
  images: [],
};

export const loadingImages = createReducer(
  initialState,
  on(CatGalleryActions.loadImages, (state, {limit, breed}) => {
    return {
      ...state,
      pending: true,
      images: [],
    };
  }),
  on(CatGalleryActions.loadedImages, (state, {imageResponse}) => {
    return {
      ...state,
      pending: false,
      images: imageResponse,
    };
  }),
  on(CatGalleryActions.imagesNotLoaded,
    (state, {error}) => {
      return {
        ...state,
        error: error,
      };
    }),
);

export const loadingListOfBreeds = createReducer(
  initialState,
  on(CatGalleryActions.loadListOfBreeds, (state) => {
    return {
      ...state,
      pending: true,
      images: [],
    };
  }),
  on(CatGalleryActions.loadedListOfBreeds,
    (state, {listOfBreedsResponse}) => {
      return {
        ...state,
        pending: false,
        images: listOfBreedsResponse,
      };
    }),
  on(CatGalleryActions.listOfBreedsNotLoaded,
    (state, {error}) => {
      return {
        ...state,
        error: error,
      };
    }),
);

