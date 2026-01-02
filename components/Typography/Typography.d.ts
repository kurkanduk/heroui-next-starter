import { type ReactNode, type ElementType, type HTMLAttributes } from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "overline";

export type Align = "left" | "center" | "right" | "justify";

export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Props for Typography component
 */
export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant?: Variant;
  /**
   * Set the text-align on the component.
   * @default 'left'
   */
  align?: Align;
  /**
   * The color of the text.
   * @default 'default'
   */
  color?: Color;
  /**
   * Additional Tailwind CSS classes
   */
  className?: string;
}
