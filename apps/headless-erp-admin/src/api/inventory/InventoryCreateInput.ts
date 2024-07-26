import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  stockLevel?: number | null;
  lastUpdated?: Date | null;
  product?: ProductWhereUniqueInput | null;
};
