import { Product } from "../product/Product";
import { Order } from "../order/Order";

export type Tenant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  apiKey: string | null;
  name: string | null;
  products?: Array<Product>;
  orders?: Array<Order>;
};
