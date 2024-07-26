/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Tenant as PrismaTenant,
  Product as PrismaProduct,
  Order as PrismaOrder,
} from "@prisma/client";

export class TenantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TenantCountArgs, "select">): Promise<number> {
    return this.prisma.tenant.count(args);
  }

  async tenants(args: Prisma.TenantFindManyArgs): Promise<PrismaTenant[]> {
    return this.prisma.tenant.findMany(args);
  }
  async tenant(
    args: Prisma.TenantFindUniqueArgs
  ): Promise<PrismaTenant | null> {
    return this.prisma.tenant.findUnique(args);
  }
  async createTenant(args: Prisma.TenantCreateArgs): Promise<PrismaTenant> {
    return this.prisma.tenant.create(args);
  }
  async updateTenant(args: Prisma.TenantUpdateArgs): Promise<PrismaTenant> {
    return this.prisma.tenant.update(args);
  }
  async deleteTenant(args: Prisma.TenantDeleteArgs): Promise<PrismaTenant> {
    return this.prisma.tenant.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }
}
