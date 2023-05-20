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
