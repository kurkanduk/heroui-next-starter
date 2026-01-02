"use client";

import { Button, Link } from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <Stack spacing={6} className="max-w-md text-center">
        <Stack spacing={2}>
          <Typography variant="h1" align="center">
            404
          </Typography>
          <Typography variant="h3" align="center">
            Page Not Found
          </Typography>
          <Typography variant="body1" color="secondary" align="center">
            The page you are looking for does not exist or has been moved.
          </Typography>
        </Stack>

        <Stack direction="row" spacing={4} className="justify-center">
          <Button as={Link} href="/" color="primary">
            Go home
          </Button>
          <Button as={Link} href="/about" color="default" variant="bordered">
            View components
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
