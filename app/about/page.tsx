"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Switch,
  Button,
  Link,
  Chip,
} from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";
import HeaderLayout from "@/app/layout/HeaderLayout";
import DrawerLayout from "@/app/layout/DrawerLayout";

export default function AboutPage() {
  const [useDrawer, setUseDrawer] = useState(false);

  const Layout = useDrawer ? DrawerLayout : HeaderLayout;

  return (
    <Layout>
      <Stack spacing={10} className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <Stack spacing={4}>
          <Typography variant="h1">Components Showcase</Typography>
          <Typography variant="body1" color="secondary" className="text-lg">
            Explore our custom components and see them in action. All components
            are built with HeroUI and Tailwind CSS.
          </Typography>
          <Stack direction="row" spacing={4} className="flex-wrap">
            <Button
              as={Link}
              href="/examples/forms"
              size="sm"
              variant="bordered"
            >
              Form Examples
            </Button>
            <Button
              as={Link}
              href="/examples/components"
              size="sm"
              variant="bordered"
            >
              HeroUI Components
            </Button>
          </Stack>
        </Stack>

        {/* Layout Switcher */}
        <Card>
          <CardHeader>
            <Stack direction="row" spacing={4} className="items-center w-full">
              <Typography variant="h3">Layout Switcher</Typography>
              <Stack
                direction="row"
                spacing={2}
                className="items-center ml-auto"
              >
                <Typography variant="body2">Header</Typography>
                <Switch
                  isSelected={useDrawer}
                  onValueChange={setUseDrawer}
                  size="sm"
                />
                <Typography variant="body2">Drawer</Typography>
              </Stack>
            </Stack>
          </CardHeader>
          <CardBody>
            <Typography variant="body2" color="secondary">
              Switch between Header and Drawer layouts to see different
              navigation patterns. The layout switcher is located here for
              demonstration purposes.
            </Typography>
          </CardBody>
        </Card>

        {/* Stack Component */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Stack Component</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Typography variant="h4">Usage</Typography>
                <Card className="bg-default-100">
                  <CardBody>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`<Stack direction="row" spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`}</code>
                    </pre>
                  </CardBody>
                </Card>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Example</Typography>
                <Card>
                  <CardBody>
                    <Stack
                      direction="row"
                      spacing={4}
                      className="justify-center"
                    >
                      <Button size="sm" color="default">
                        Button 1
                      </Button>
                      <Button size="sm" color="default" variant="bordered">
                        Button 2
                      </Button>
                      <Button size="sm" color="default" variant="flat">
                        Button 3
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">With Divider (Vertical)</Typography>
                <Card>
                  <CardBody>
                    <Stack
                      direction="column"
                      divider={true}
                      spacing={4}
                      className="justify-center"
                    >
                      <Typography variant="body2">Item 1</Typography>
                      <Typography variant="body2">Item 2</Typography>
                      <Typography variant="body2">Item 3</Typography>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">
                  With Divider and Gap (Horizontal)
                </Typography>
                <Card>
                  <CardBody>
                    <Stack spacing={4}>
                      <Stack
                        direction="row"
                        divider={true}
                        spacing={6}
                        className="justify-center"
                      >
                        <Button size="sm" color="default">
                          Button 1
                        </Button>
                        <Button size="sm" color="default" variant="bordered">
                          Button 2
                        </Button>
                        <Button size="sm" color="default" variant="flat">
                          Button 3
                        </Button>
                      </Stack>
                      <Stack
                        direction="row"
                        divider={true}
                        spacing={8}
                        className="justify-center items-center"
                      >
                        <Typography variant="body1">Home</Typography>
                        <Typography variant="body1">About</Typography>
                        <Typography variant="body1">Contact</Typography>
                        <Typography variant="body1">Services</Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        divider={true}
                        spacing={3}
                        className="justify-start"
                      >
                        <Chip size="sm">Tag 1</Chip>
                        <Chip size="sm" color="primary">
                          Tag 2
                        </Chip>
                        <Chip size="sm" color="secondary">
                          Tag 3
                        </Chip>
                      </Stack>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Typography Component */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Typography Component</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Typography variant="h4">Usage</Typography>
                <Card className="bg-default-100">
                  <CardBody>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`<Typography variant="h1" color="primary">
  Heading Text
</Typography>`}</code>
                    </pre>
                  </CardBody>
                </Card>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Variants</Typography>
                <Card>
                  <CardBody>
                    <Stack spacing={3}>
                      <Typography variant="h1">Heading 1</Typography>
                      <Typography variant="h2">Heading 2</Typography>
                      <Typography variant="h3">Heading 3</Typography>
                      <Typography variant="h4">Heading 4</Typography>
                      <Typography variant="body1">Body 1 text</Typography>
                      <Typography variant="body2">Body 2 text</Typography>
                      <Typography variant="caption">Caption text</Typography>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Colors</Typography>
                <Card>
                  <CardBody>
                    <Stack spacing={2}>
                      <Typography variant="body1" color="default">
                        Default color
                      </Typography>
                      <Typography variant="body1" color="primary">
                        Primary color
                      </Typography>
                      <Typography variant="body1" color="secondary">
                        Secondary color
                      </Typography>
                      <Typography variant="body1" color="success">
                        Success color
                      </Typography>
                      <Typography variant="body1" color="warning">
                        Warning color
                      </Typography>
                      <Typography variant="body1" color="danger">
                        Danger color
                      </Typography>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* StaticDrawer Component */}
        <Card>
          <CardHeader>
            <Typography variant="h3">StaticDrawer Component</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Typography variant="h4">Usage</Typography>
                <Card className="bg-default-100">
                  <CardBody>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`<StaticDrawer
  placement="left"
  width="w-64"
  isCollapsed={false}
>
  {/* Drawer content */}
</StaticDrawer>`}</code>
                    </pre>
                  </CardBody>
                </Card>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Props</Typography>
                <Card>
                  <CardBody>
                    <Stack spacing={2} component="ul">
                      <Typography component="li" variant="body2">
                        • placement: &quot;left&quot; | &quot;right&quot;
                        (default: &quot;left&quot;)
                      </Typography>
                      <Typography component="li" variant="body2">
                        • width: string (default: &quot;w-64&quot;)
                      </Typography>
                      <Typography component="li" variant="body2">
                        • isCollapsed: boolean (default: false)
                      </Typography>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* View Component */}
        <Card>
          <CardHeader>
            <Typography variant="h3">View Component</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Typography variant="h4">Usage</Typography>
                <Card className="bg-default-100">
                  <CardBody>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`<View
  hasDrawer={true}
  drawerWidth="w-64"
  headerHeight={64}
  drawerPlacement="left"
>
  {/* Content */}
</View>`}</code>
                    </pre>
                  </CardBody>
                </Card>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h4">Props</Typography>
                <Card>
                  <CardBody>
                    <Stack spacing={2} component="ul">
                      <Typography component="li" variant="body2">
                        • hasDrawer: boolean (default: false)
                      </Typography>
                      <Typography component="li" variant="body2">
                        • drawerWidth: string | number
                      </Typography>
                      <Typography component="li" variant="body2">
                        • headerHeight: string | number
                      </Typography>
                      <Typography component="li" variant="body2">
                        • drawerPlacement: &quot;left&quot; | &quot;right&quot;
                        (default: &quot;left&quot;)
                      </Typography>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Layout>
  );
}
