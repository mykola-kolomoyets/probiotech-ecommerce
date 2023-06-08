export type NumberInputProps = {
  max: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
