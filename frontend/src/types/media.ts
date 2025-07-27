export interface MediaAttributes {
  name: string;
  alternativeText: string | null;
  url: string;
  width: number;
  height: number;
  mime: string;
  size: number;
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  data: {
    id: number;
    attributes: MediaAttributes;
  } | null;
}
