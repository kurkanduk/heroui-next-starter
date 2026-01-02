import { forwardRef, Children, ElementType, ReactNode } from "react";
import { Divider } from "@heroui/react";
import type { StackProps } from "./Stack.d";

export type { StackProps, Direction } from "./Stack.d";

function addDividers(
  children: ReactNode,
  divider: ReactNode | boolean,
  direction: string
): ReactNode {
  const childrenArray = Children.toArray(children).filter(Boolean);
  if (childrenArray.length <= 1) return children;

  const isRow = direction === "row" || direction === "row-reverse";
  const dividerOrientation = isRow ? "vertical" : "horizontal";

  const result: ReactNode[] = [];
  childrenArray.forEach((child, index) => {
    if (index > 0) {
      let dividerElement: ReactNode;
      if (divider === true) {
        // Use HeroUI Divider with automatic orientation
        dividerElement = (
          <Divider
            key={`divider-${index}`}
            orientation={dividerOrientation}
            className={isRow ? "h-6 self-center" : ""}
          />
        );
      } else {
        // Use custom divider
        dividerElement = <div key={`divider-${index}`}>{divider}</div>;
      }
      result.push(dividerElement);
    }
    result.push(child);
  });
  return result;
}

/**
 * Stack component, simplified version of MUI Stack component.
 *
 * **Server-Side Rendering (SSR):**
 * - This component can be used in Server Components when `divider` is not used or when using a custom divider element.
 * - When `divider={true}` is used, the component requires Client Component context because it uses HeroUI Divider which uses React hooks.
 * - To use with `divider={true}` in a Server Component, wrap it in a Client Component or add "use client" directive.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Stack spacing={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 *
 * // Horizontal stack with spacing
 * <Stack direction="row" spacing={8}>
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 * </Stack>
 *
 * // With divider
 * <Stack direction="row" divider={true} spacing={4}>
 *   <Typography>Item 1</Typography>
 *   <Typography>Item 2</Typography>
 * </Stack>
 * ```
 *
 * @param props - StackProps
 * @param ref - Ref
 * @returns Stack component
 */
export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      children,
      component = "div",
      direction = "column",
      divider,
      spacing = 0,
      className = "",
      ...other
    },
    ref
  ) => {
    const Component = component as ElementType;

    const directionClass =
      direction === "row"
        ? "flex-row"
        : direction === "row-reverse"
          ? "flex-row-reverse"
          : direction === "column-reverse"
            ? "flex-col-reverse"
            : "flex-col";

    const gapStyle = spacing
      ? {
          gap: typeof spacing === "number" ? `${spacing}px` : spacing,
        }
      : undefined;
    const processedChildren = divider
      ? addDividers(children, divider, direction)
      : children;
    const classes = ["flex", directionClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={classes} style={gapStyle} {...other}>
        {processedChildren}
      </Component>
    );
  }
);

Stack.displayName = "Stack";

export default Stack;
