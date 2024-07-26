import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  totalAmount?: SortOrder;
  orderDate?: SortOrder;
  status?: SortOrder;
  tenantId?: SortOrder;
  productId?: SortOrder;
};
