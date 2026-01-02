"use client";

import { Component } from "react";
import { Button } from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";
import type { ErrorBoundaryProps } from "./ErrorBoundary.d";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component to catch and handle React errors in the component tree.
 *
 * **Server-Side Rendering (SSR):**
 * This component is a Client Component and cannot be used in Server Components.
 * Error boundaries only work in Client Components. For Next.js App Router,
 * use the `error.tsx` file for route-level error handling.
 *
 * @example
 * ```tsx
 * // Basic usage with default fallback
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 *
 * // Custom fallback UI
 * <ErrorBoundary
 *   fallback={(error, reset) => (
 *     <div>
 *       <p>Error: {error.message}</p>
 *       <button onClick={reset}>Try again</button>
 *     </div>
 *   )}
 * >
 *   <MyComponent />
 * </ErrorBoundary>
 *
 * // With error logging
 * <ErrorBoundary
 *   onError={(error, errorInfo) => {
 *     console.error("Error caught:", error, errorInfo);
 *     // Send to error reporting service
 *   }}
 * >
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Call the onError callback if provided
    this.props.onError?.(error, errorInfo);

    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  componentWillUnmount() {
    // Reset error state on unmount if requested
    if (this.props.resetOnUnmount && this.state.hasError) {
      this.setState({
        hasError: false,
        error: null,
      });
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      // Extract custom props to exclude them from ...other spread
      const {
        fallback,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onError: _onError, // Used via this.props.onError in componentDidCatch
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        resetOnUnmount: _resetOnUnmount, // Used via this.props.resetOnUnmount in componentWillUnmount
        className = "",
        ...other
      } = this.props;

      // Use custom fallback if provided
      if (fallback) {
        if (typeof fallback === "function") {
          return (
            <div className={className} {...other}>
              {fallback(this.state.error, this.resetError)}
            </div>
          );
        }
        return (
          <div className={className} {...other}>
            {fallback}
          </div>
        );
      }

      // Default fallback UI
      return (
        <div
          className={`flex items-center justify-center min-h-[200px] p-8 ${className}`}
          {...other}
        >
          <Stack spacing={6} className="max-w-md text-center">
            <Stack spacing={2}>
              <Typography variant="h3" align="center">
                Something went wrong
              </Typography>
              <Typography variant="body1" color="secondary" align="center">
                {this.state.error.message || "An unexpected error occurred"}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={4} className="justify-center">
              <Button color="primary" onPress={this.resetError}>
                Try again
              </Button>
            </Stack>
          </Stack>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
