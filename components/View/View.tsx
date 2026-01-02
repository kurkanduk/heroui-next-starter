import { forwardRef, useMemo } from "react";
import type { ViewProps } from "./View.d";

export type { ViewProps } from "./View.d";

/**
 * View component that calculates drawer and header dimensions
 * and renders the app content with proper spacing.
 *
 * **Server-Side Rendering (SSR):**
 * This component can be used in Server Components. It uses `useMemo` which works on the server,
 * and does not use any browser APIs.
 *
 * @example
 * ```tsx
 * // Basic usage with drawer
 * <View hasDrawer drawerWidth="w-64" headerHeight={64} drawerPlacement="left">
 *   <div>Main content</div>
 * </View>
 *
 * // With pixel values
 * <View hasDrawer drawerWidth={256} headerHeight={80} drawerPlacement="left">
 *   <div>Main content</div>
 * </View>
 *
 * // Without drawer, just header
 * <View headerHeight={64}>
 *   <div>Main content</div>
 * </View>
 * ```
 *
 * @param props - ViewProps
 * @param ref - Ref
 * @returns View component
 */
export const View = forwardRef<HTMLElement, ViewProps>(
  (
    {
      children,
      drawerWidth = 0,
      headerHeight = 0,
      hasDrawer = false,
      drawerPlacement = "left",
      className = "",
      ...other
    },
    ref
  ) => {
    const { paddingClass, paddingStyle } = useMemo(() => {
      let padding = "";
      const style: React.CSSProperties = {};

      // Handle drawer width
      if (hasDrawer && drawerWidth) {
        if (typeof drawerWidth === "string" && !drawerWidth.includes("px")) {
          // Tailwind class (e.g., "w-64", "w-20")
          const widthMap: Record<string, string> = {
            "w-20": drawerPlacement === "left" ? "pl-20" : "pr-20",
            "w-64": drawerPlacement === "left" ? "pl-64" : "pr-64",
            "w-80": drawerPlacement === "left" ? "pl-80" : "pr-80",
          };
          padding = widthMap[drawerWidth] || "";
        } else {
          // Pixel value or number
          const width =
            typeof drawerWidth === "number" ? `${drawerWidth}px` : drawerWidth;
          if (drawerPlacement === "left") {
            style.paddingLeft = width;
          } else {
            style.paddingRight = width;
          }
        }
      }

      // Handle header height
      if (headerHeight) {
        const height =
          typeof headerHeight === "number"
            ? `${headerHeight}px`
            : headerHeight.includes("px")
              ? headerHeight
              : undefined;

        if (height) {
          style.paddingTop = height;
        }
      }

      return { paddingClass: padding, paddingStyle: style };
    }, [drawerWidth, headerHeight, hasDrawer, drawerPlacement]);

    const classes = [paddingClass, className].filter(Boolean).join(" ");

    return (
      <main ref={ref} className={classes} style={paddingStyle} {...other}>
        {children}
      </main>
    );
  }
);

View.displayName = "View";

export default View;
