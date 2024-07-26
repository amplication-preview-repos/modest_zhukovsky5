import { ProductUpdateManyWithoutTenantsInput } from "./ProductUpdateManyWithoutTenantsInput";
import { OrderUpdateManyWithoutTenantsInput } from "./OrderUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  apiKey?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutTenantsInput;
  orders?: OrderUpdateManyWithoutTenantsInput;
};
