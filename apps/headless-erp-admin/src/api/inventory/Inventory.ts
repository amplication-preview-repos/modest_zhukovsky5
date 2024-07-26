import { Product } from "../product/Product";

export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  stockLevel: number | null;
  lastUpdated: Date | null;
  product?: Product | null;
};
