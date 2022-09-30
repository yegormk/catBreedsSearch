export interface CatImage {
  id: string,
  url: string,
  name: string,
  width: number,
  height: number,
}

export interface CatImageData {
  pending: boolean,
  error: string,
  images: CatImage[],
}

export interface CatGalleryState {
  imageData: CatImageData,
  listOfBreeds: CatImageData,
}
