import { ProductCreateNestedManyWithoutTenantsInput } from "./ProductCreateNestedManyWithoutTenantsInput";
import { OrderCreateNestedManyWithoutTenantsInput } from "./OrderCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  apiKey?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutTenantsInput;
  orders?: OrderCreateNestedManyWithoutTenantsInput;
};
