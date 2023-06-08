import { forwardRef, memo } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import clsx from "clsx";
import type { NumberInputProps } from "./types";
import s from "./NumberInput.module.css";

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    { className, onIncrementClick, onDecrementClick, max = 5, ...props },
    ref
  ) => {
    return (
      <div className={clsx(s.wrap, className)}>
        <button
          className={clsx(s.button, s.decrement, "focus-primary")}
          onClick={() => {
            if (Number(props.value) === 1) {
              return;
            }

            onDecrementClick?.();
          }}
        >
          <BiMinus size={24} />
        </button>
        <input
          className={s.input}
          ref={ref}
          type="number"
          {...props}
          min={0}
          max={max}
          tabIndex={-1}
        />
        <button
          className={clsx(s.button, s.increment, "focus-primary")}
          onClick={() => {
            if (Number(props.value) === max) {
              return;
            }

            onIncrementClick?.();
          }}
        >
          <BiPlus size={24} />
        </button>
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";

export default memo(NumberInput);
