import { z } from "zod";
import { EMPTY_PRODUCT_ID_ERROR } from "./constants";

export const getProductItemSchema = z.object({
  id: z
    .string({ required_error: EMPTY_PRODUCT_ID_ERROR })
    .min(1, EMPTY_PRODUCT_ID_ERROR),
});
