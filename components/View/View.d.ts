import { type ReactNode, type HTMLAttributes } from "react";

/**
 * Props for View component
 */
export interface ViewProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Drawer width in pixels or Tailwind class (e.g., "w-64", "256px").
   * Used to calculate left/right margin for content.
   */
  drawerWidth?: string | number;
  /**
   * Header height in pixels or Tailwind class (e.g., "h-16", "64px").
   * Used to calculate top margin for content.
   */
  headerHeight?: string | number;
  /**
   * Whether drawer is present and should be accounted for.
   * @default false
   */
  hasDrawer?: boolean;
  /**
   * Drawer placement if present.
   * @default 'left'
   */
  drawerPlacement?: "left" | "right";
  /**
   * Additional Tailwind CSS classes
   */
  className?: string;
}
