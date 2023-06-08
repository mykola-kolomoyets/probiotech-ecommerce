import { memo } from "react";
import clsx from "clsx";
import type { ProductColorOptionProps } from "./types";
import s from "./ProductColorOption.module.css";

const ProductColorOption: React.FC<ProductColorOptionProps> = ({
  className,
  id,
  primary,
  secondary,
  active,
  onClick,
}) => {
  const activeClassName = active && [s.active];
  return (
    <button
      className={clsx(s.wrap, className, "focus-primary", activeClassName)}
      onClick={() => {
        onClick?.(id);
      }}
    >
      <span className={s["colors-wrap"]}>
        <span className={s.color} style={{ backgroundColor: primary }} />
        <span className={s.color} style={{ backgroundColor: secondary }} />
      </span>
    </button>
  );
};

export default memo(ProductColorOption);
