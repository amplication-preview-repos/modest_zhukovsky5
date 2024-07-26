import { Tenant } from "../tenant/Tenant";
import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  orderDate: Date | null;
  status: string | null;
  tenant?: Tenant | null;
  product?: Product | null;
};
