import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantityAvailable?: IntNullableFilter;
  tenant?: TenantWhereUniqueInput;
  orders?: OrderListRelationFilter;
  inventories?: InventoryListRelationFilter;
};
