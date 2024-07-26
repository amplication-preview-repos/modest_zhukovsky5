import { Tenant } from "../tenant/Tenant";
import { Order } from "../order/Order";
import { Inventory } from "../inventory/Inventory";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  price: number | null;
  quantityAvailable: number | null;
  tenant?: Tenant | null;
  orders?: Array<Order>;
  inventories?: Array<Inventory>;
};
