import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  stockLevel?: SortOrder;
  lastUpdated?: SortOrder;
  productId?: SortOrder;
};
