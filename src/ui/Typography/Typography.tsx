import { memo } from "react";
import clsx from "clsx";
import type { TypographyProps } from "./types";
import { TYPOGRAPHY_COMPONENTS, TYPOGRAPHY_VARIANTS } from "./constants";
import s from "./Typography.module.css";

const Typography: React.FC<TypographyProps> = ({
  className,
  children,
  variant = TYPOGRAPHY_VARIANTS.H1,
  component = TYPOGRAPHY_COMPONENTS.H1,
}) => {
  const Component = component as keyof JSX.IntrinsicElements;

  return (
    <Component className={clsx(s[variant], className)}>{children}</Component>
  );
};

export default memo(Typography);
