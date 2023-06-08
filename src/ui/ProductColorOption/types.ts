import type { ProductColorOption, WithClassName } from "@/types";

export type ProductColorOptionProps = WithClassName<{
  active?: boolean;
  onClick?: (id: string) => void;
}> &
  ProductColorOption;
