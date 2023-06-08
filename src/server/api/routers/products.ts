import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getProductItemSchema } from "../schemas";
import { MOCK_PRODUCT_ITEM } from "../constants";

export const productsRouter = createTRPCRouter({
  getItem: publicProcedure.input(getProductItemSchema).query(({ input }) => {
    return {
      ...MOCK_PRODUCT_ITEM,
      id: input.id,
    };
  }),
});
