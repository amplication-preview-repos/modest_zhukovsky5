import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  apiKey?: SortOrder;
  name?: SortOrder;
};
