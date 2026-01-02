import { type ReactNode, type HTMLAttributes } from "react";

export type Placement = "left" | "right";

/**
 * Props for StaticDrawer component
 */
export interface StaticDrawerProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the drawer.
   */
  children?: ReactNode;
  /**
   * The placement of the drawer.
   * @default 'left'
   */
  placement?: Placement;
  /**
   * The width of the drawer when expanded.
   * @default 'w-64'
   */
  width?: string;
  /**
   * Whether the drawer is collapsed (shows only icons).
   * @default false
   */
  isCollapsed?: boolean;
  /**
   * Additional Tailwind CSS classes
   */
  className?: string;
}
