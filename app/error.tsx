"use client";

import { useEffect } from "react";
import { Button } from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";
import ErrorBoundary from "@/components/ErrorBoundary";

function ErrorContent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <Stack spacing={6} className="max-w-md text-center">
        <Stack spacing={2}>
          <Typography variant="h1" align="center">
            Something went wrong!
          </Typography>
          <Typography variant="body1" color="secondary" align="center">
            {error.message || "An unexpected error occurred"}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={4} className="justify-center">
          <Button color="primary" onPress={reset}>
            Try again
          </Button>
          <Button as="a" href="/" color="default" variant="bordered">
            Go home
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorBoundary
      onError={(err, errorInfo) => {
        console.error("Error in error page:", err, errorInfo);
      }}
    >
      <ErrorContent error={error} reset={reset} />
    </ErrorBoundary>
  );
}
