import { forwardRef, type ElementType } from "react";
import type { TypographyProps, Variant, Align, Color } from "./Typography.d";

export type { TypographyProps, Variant, Align, Color } from "./Typography.d";

const variantMap: Record<Variant, { element: ElementType; classes: string }> = {
  h1: { element: "h1", classes: "text-4xl font-bold" },
  h2: { element: "h2", classes: "text-3xl font-bold" },
  h3: { element: "h3", classes: "text-2xl font-semibold" },
  h4: { element: "h4", classes: "text-xl font-semibold" },
  h5: { element: "h5", classes: "text-lg font-medium" },
  h6: { element: "h6", classes: "text-base font-medium" },
  body1: { element: "p", classes: "text-base" },
  body2: { element: "p", classes: "text-sm" },
  subtitle1: { element: "p", classes: "text-base font-medium" },
  subtitle2: { element: "p", classes: "text-sm font-medium" },
  caption: { element: "span", classes: "text-xs" },
  overline: { element: "span", classes: "text-xs uppercase tracking-wide" },
};

const alignMap: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const colorMap: Record<Color, string> = {
  default: "text-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
};

/**
 * Typography component, simplified version of MUI Typography component.
 *
 * **Server-Side Rendering (SSR):**
 * This component can be used in Server Components. It does not use any client-side hooks or browser APIs.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Typography variant="h1">Heading</Typography>
 *
 * // With color and alignment
 * <Typography variant="body1" color="primary" align="center">
 *   Centered primary text
 * </Typography>
 *
 * // Custom component
 * <Typography variant="h2" component="h3">
 *   Custom heading level
 * </Typography>
 * ```
 *
 * @param props - TypographyProps
 * @param ref - Ref
 * @returns Typography component
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      children,
      component,
      variant = "body1",
      align = "left",
      color = "default",
      className = "",
      ...other
    },
    ref
  ) => {
    const variantConfig = variantMap[variant];
    const Component = (component || variantConfig.element) as ElementType;

    const classes = [
      variantConfig.classes,
      alignMap[align],
      colorMap[color],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={classes} {...other}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
