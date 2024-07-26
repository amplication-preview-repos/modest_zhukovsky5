import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  totalAmount?: number | null;
  orderDate?: Date | null;
  status?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
