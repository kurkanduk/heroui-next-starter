"use client";

import { Spinner } from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <Stack spacing={4} className="items-center">
        <Spinner size="lg" color="primary" />
        <Typography variant="body1" color="secondary">
          Loading...
        </Typography>
      </Stack>
    </div>
  );
}
