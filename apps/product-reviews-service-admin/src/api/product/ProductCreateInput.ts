import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
