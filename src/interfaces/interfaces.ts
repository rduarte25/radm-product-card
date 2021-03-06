import { CSSProperties } from "react";

export interface ProductCardProps {
  children: ( args: ProductCardHandles ) => JSX.Element;
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface usePropsArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  handleIncrease: (value: number) => void;
  handleReset: () => void;
}

export interface ProductButtonsProps {
  counter: number;
  handleIncrease: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
}

export interface ProductImageProps {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductButtonProps {
  className?: string;
  style?: CSSProperties;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductCardHandles {
  count: number;
  isMaxCountReached: boolean;
  maxCount?:number;
  product: Product;

  handleIncrease: (value: number) => void;
  handleReset: () => void;
}