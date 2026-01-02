import { type ReactNode, type ComponentPropsWithoutRef } from "react";

/**
 * Props for the ErrorBoundary component.
 */
export interface ErrorBoundaryProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * The children to render. If an error occurs, the fallback UI will be shown instead.
   */
  children: ReactNode;

  /**
   * Custom fallback UI to display when an error occurs.
   * If not provided, a default error UI will be shown.
   */
  fallback?: ReactNode | ((error: Error, resetError: () => void) => ReactNode);

  /**
   * Callback function called when an error is caught.
   * Useful for logging errors to an error reporting service.
   */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;

  /**
   * Whether to reset the error boundary when the component is unmounted.
   * @default false
   */
  resetOnUnmount?: boolean;
}
