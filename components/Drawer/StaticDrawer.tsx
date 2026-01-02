import { forwardRef } from "react";
import type { StaticDrawerProps } from "./StaticDrawer.d";

export type { StaticDrawerProps, Placement } from "./StaticDrawer.d";

/**
 * StaticDrawer component, static sidebar that can be placed on left or right side.
 *
 * **Server-Side Rendering (SSR):**
 * This component can be used in Server Components. It does not use any client-side hooks or browser APIs.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <StaticDrawer placement="left" width="w-64">
 *   <nav>
 *     <a href="/">Home</a>
 *     <a href="/about">About</a>
 *   </nav>
 * </StaticDrawer>
 *
 * // Collapsed drawer
 * <StaticDrawer placement="left" width="w-64" isCollapsed={true}>
 *   <nav>
 *     <IconButton icon={<HomeIcon />} />
 *   </nav>
 * </StaticDrawer>
 *
 * // Right placement
 * <StaticDrawer placement="right" width="w-80">
 *   <div>Sidebar content</div>
 * </StaticDrawer>
 * ```
 *
 * @param props - StaticDrawerProps
 * @param ref - Ref
 * @returns StaticDrawer component
 */
export const StaticDrawer = forwardRef<HTMLElement, StaticDrawerProps>(
  (
    {
      children,
      placement = "left",
      width = "w-64",
      isCollapsed = false,
      className = "",
      ...other
    },
    ref
  ) => {
    const placementClasses =
      placement === "right"
        ? isCollapsed
          ? "w-20"
          : width
        : isCollapsed
          ? "w-20"
          : width;

    const classes = [
      "h-[calc(100vh-var(--navbar-height))] overflow-y-auto transition-all duration-300 sticky top-[var(--navbar-height)] self-start z-39",
      placementClasses,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <aside ref={ref} className={classes} {...other}>
        {children}
      </aside>
    );
  }
);

StaticDrawer.displayName = "StaticDrawer";

export default StaticDrawer;
