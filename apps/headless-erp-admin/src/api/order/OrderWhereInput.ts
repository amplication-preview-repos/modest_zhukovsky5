import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  orderDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
