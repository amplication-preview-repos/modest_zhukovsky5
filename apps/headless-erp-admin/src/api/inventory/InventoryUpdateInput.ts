import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  stockLevel?: number | null;
  lastUpdated?: Date | null;
  product?: ProductWhereUniqueInput | null;
};
