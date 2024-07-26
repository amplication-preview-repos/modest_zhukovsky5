import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type TenantWhereInput = {
  id?: StringFilter;
  apiKey?: StringNullableFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  orders?: OrderListRelationFilter;
};
