import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  quantityAvailable?: number | null;
  tenant?: TenantWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
};
