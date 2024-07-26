import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  stockLevel?: IntNullableFilter;
  lastUpdated?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
};
