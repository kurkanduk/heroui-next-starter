"use client";

import { Button, Card, CardBody, Link } from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";
import AppLayout from "@/app/layout/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Stack spacing={12} className="max-w-5xl mx-auto p-8">
        {/* Hero Section */}
        <Stack spacing={6} className="text-center py-12">
          <Stack spacing={4}>
            <Typography variant="h1" align="center">
              {process.env.NEXT_PUBLIC_APP_NAME || "Next.js + HeroUI Starter"}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="secondary"
              className="text-lg max-w-2xl mx-auto"
            >
              {process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
                "A modern starter template built with Next.js and HeroUI"}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={4} className="justify-center">
            <Button
              as={Link}
              href="/about"
              color="primary"
              size="lg"
              variant="solid"
            >
              View Components
            </Button>
            <Button
              as={Link}
              href="/about"
              color="default"
              size="lg"
              variant="bordered"
            >
              Learn More
            </Button>
          </Stack>
        </Stack>

        {/* Features Section */}
        <Stack spacing={6}>
          <Typography variant="h2" align="center">
            Features
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardBody>
                <Stack spacing={3}>
                  <Typography variant="h4">Next.js 16</Typography>
                  <Typography variant="body2" color="secondary">
                    Built with the latest Next.js App Router for optimal
                    performance and developer experience.
                  </Typography>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Stack spacing={3}>
                  <Typography variant="h4">HeroUI Components</Typography>
                  <Typography variant="body2" color="secondary">
                    Beautiful, accessible React components built with Tailwind
                    CSS.
                  </Typography>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Stack spacing={3}>
                  <Typography variant="h4">Custom Components</Typography>
                  <Typography variant="body2" color="secondary">
                    Pre-built Stack and Typography components following MUI-like
                    patterns.
                  </Typography>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Stack spacing={3}>
                  <Typography variant="h4">TypeScript</Typography>
                  <Typography variant="body2" color="secondary">
                    Full TypeScript support with proper type definitions for all
                    components.
                  </Typography>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Stack spacing={3}>
                  <Typography variant="h4">Responsive Layouts</Typography>
                  <Typography variant="body2" color="secondary">
                    Header and Drawer layouts ready to use out of the box.
                  </Typography>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Stack spacing={3}>
                  <Typography variant="h4">Tailwind CSS v4</Typography>
                  <Typography variant="body2" color="secondary">
                    Latest Tailwind CSS with modern features and optimizations.
                  </Typography>
                </Stack>
              </CardBody>
            </Card>
          </div>
        </Stack>

        {/* Quick Start Section */}
        <Card>
          <CardBody>
            <Stack spacing={4}>
              <Typography variant="h3">Quick Start</Typography>
              <Stack spacing={3}>
                <Typography variant="body1">
                  This starter template is ready to use. Simply customize the
                  components and layouts to fit your needs.
                </Typography>
                <Stack spacing={2} component="ul">
                  <Typography component="li" variant="body2">
                    • Customize app name and description in `.env.local`
                  </Typography>
                  <Typography component="li" variant="body2">
                    • Modify layouts in `app/layout/` directory
                  </Typography>
                  <Typography component="li" variant="body2">
                    • Add your own components in `components/` directory
                  </Typography>
                  <Typography component="li" variant="body2">
                    • Check out component examples on the About page
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </AppLayout>
  );
}
