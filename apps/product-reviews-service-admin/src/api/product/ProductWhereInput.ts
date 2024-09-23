import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  reviews?: ReviewListRelationFilter;
};
