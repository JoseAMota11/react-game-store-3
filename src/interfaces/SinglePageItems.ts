import { PlatformProps } from './PlatformProps';

export interface SinglePageItems {
  name: string;
  description_raw: string;
  background_image: string;
  rating: number;
  rating_top: number;
  platforms: PlatformProps[];
}
