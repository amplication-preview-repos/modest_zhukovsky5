import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  quantityAvailable?: number | null;
  tenant?: TenantWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  inventories?: InventoryUpdateManyWithoutProductsInput;
};
