import type { ObjValues, FCProps } from "@/types";
import type { TYPOGRAPHY_VARIANTS, TYPOGRAPHY_COMPONENTS } from "./constants";

export type TypographyVariants = ObjValues<typeof TYPOGRAPHY_VARIANTS>;
export type TypographyComponents = ObjValues<typeof TYPOGRAPHY_COMPONENTS>;

export type TypographyProps = FCProps<{
  variant?: TypographyVariants;
  component?: TypographyComponents;
}>;
