import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantityAvailable?: SortOrder;
  tenantId?: SortOrder;
};
