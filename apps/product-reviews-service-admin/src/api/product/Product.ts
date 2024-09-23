import { Review } from "../review/Review";

export type Product = {
  createdAt: Date;
  id: string;
  reviews?: Array<Review>;
  updatedAt: Date;
};
