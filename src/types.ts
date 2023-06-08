/**
 * === UTILITY TYPES ===
 */

export type ObjValues<T> = T[keyof T];

export type WithClassName<T> = T & {
  className?: string;
};

export type WithChildren<T> = T & {
  children?: React.ReactNode;
};

export type FCProps<T> = WithClassName<WithChildren<T>>;

/**
 * === PRODUCTS TYPES ===
 */

export type ProductColorOption = {
  id: string;
  primary: string;
  secondary: string;
};

export type ProductItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  feedBacksAmount: number;
  images: string[];
  colorsOptions: ProductColorOption[];
  currentColorOptionId?: string;
  itemsLeft: number;
};
