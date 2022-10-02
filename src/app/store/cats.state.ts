export interface catImage {
  id: string,
  url: string,
  name: string,
  width: number,
  height: number,
};

export interface catImageData {
  pending: boolean,
  error: string,
  images: catImage[],
};

export interface catGalleryState {
  imageData: catImageData,
  listOfBreeds: catImageData,
};
