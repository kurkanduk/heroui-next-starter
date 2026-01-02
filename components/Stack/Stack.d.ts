import { type ReactNode, type ElementType, type HTMLAttributes } from "react";

export type Direction = "column-reverse" | "column" | "row-reverse" | "row";

/**
 * Props for Stack component
 */
export interface StackProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  /**
   * Defines the flex-direction style property.
   * @default 'column'
   */
  direction?: Direction;
  /**
   * Add an element between each child.
   * - If `true`, uses HeroUI Divider with automatic orientation based on direction.
   *   **Note:** Using `divider={true}` requires Client Component context (add "use client" directive).
   * - If `ReactNode`, uses the custom divider element (works in Server Components).
   */
  divider?: boolean | ReactNode;
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing?: number | string;
  /**
   * Additional Tailwind CSS classes
   */
  className?: string;
}
