"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tabs,
  Tab,
  Chip,
  Progress,
  Spinner,
  Switch,
  Accordion,
  AccordionItem,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumbs,
  BreadcrumbItem,
  Divider,
  Link,
  Pagination,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Skeleton,
  Slider,
  Tooltip,
} from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";
import ErrorBoundary from "@/components/ErrorBoundary";
import HeaderLayout from "@/app/layout/HeaderLayout";

export default function ComponentsPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isPopoverOpen,
    onOpen: onPopoverOpen,
    onOpenChange: onPopoverOpenChange,
  } = useDisclosure();
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));
  const [sliderValue, setSliderValue] = useState([30]);

  return (
    <HeaderLayout>
      <Stack spacing={8} className="max-w-6xl mx-auto p-8">
        <Stack spacing={4}>
          <Typography variant="h1">HeroUI Components</Typography>
          <Typography variant="body1" color="secondary">
            Examples of various HeroUI components
          </Typography>
        </Stack>

        {/* Modal Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Modal</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Button onPress={onOpen} color="primary">
                Open Modal
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader>
                        <Typography variant="h3">Modal Title</Typography>
                      </ModalHeader>
                      <ModalBody>
                        <Typography variant="body1">
                          This is a modal example. You can add any content here.
                        </Typography>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Action
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </Stack>
          </CardBody>
        </Card>

        {/* Dropdown Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Dropdown</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Open Menu</Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  selectedKeys={selectedKeys}
                  selectionMode="multiple"
                  onSelectionChange={(keys) =>
                    setSelectedKeys(keys as Set<string>)
                  }
                >
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Stack>
          </CardBody>
        </Card>

        {/* Tabs Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Tabs</Typography>
          </CardHeader>
          <CardBody>
            <Tabs aria-label="Options">
              <Tab key="photos" title="Photos">
                <Card>
                  <CardBody>
                    <Typography variant="body1">
                      Content for Photos tab
                    </Typography>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Music">
                <Card>
                  <CardBody>
                    <Typography variant="body1">
                      Content for Music tab
                    </Typography>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Videos">
                <Card>
                  <CardBody>
                    <Typography variant="body1">
                      Content for Videos tab
                    </Typography>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>

        {/* Chips Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Chips</Typography>
          </CardHeader>
          <CardBody>
            <Stack direction="row" spacing={2} className="flex-wrap">
              <Chip>Default</Chip>
              <Chip color="primary">Primary</Chip>
              <Chip color="secondary">Secondary</Chip>
              <Chip color="success">Success</Chip>
              <Chip color="warning">Warning</Chip>
              <Chip color="danger">Danger</Chip>
              <Chip variant="flat" color="primary">
                Flat
              </Chip>
              <Chip variant="bordered" color="primary">
                Bordered
              </Chip>
            </Stack>
          </CardBody>
        </Card>

        {/* Progress Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Progress</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Progress aria-label="Loading..." value={60} />
              <Progress color="primary" aria-label="Loading..." value={80} />
              <Progress color="success" aria-label="Loading..." value={40} />
            </Stack>
          </CardBody>
        </Card>

        {/* Spinner Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Spinner</Typography>
          </CardHeader>
          <CardBody>
            <Stack direction="row" spacing={4} className="items-center">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner color="primary" />
              <Spinner color="secondary" />
              <Spinner color="success" />
            </Stack>
          </CardBody>
        </Card>

        {/* Switch Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Switch</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Switch defaultSelected>Default</Switch>
              <Switch color="primary" defaultSelected>
                Primary
              </Switch>
              <Switch color="secondary" defaultSelected>
                Secondary
              </Switch>
              <Switch color="success" defaultSelected>
                Success
              </Switch>
              <Switch color="warning" defaultSelected>
                Warning
              </Switch>
              <Switch color="danger" defaultSelected>
                Danger
              </Switch>
            </Stack>
          </CardBody>
        </Card>

        {/* Button Variants Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Button Variants</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Stack direction="row" spacing={2} className="flex-wrap">
                <Button color="primary" variant="solid">
                  Solid
                </Button>
                <Button color="primary" variant="bordered">
                  Bordered
                </Button>
                <Button color="primary" variant="light">
                  Light
                </Button>
                <Button color="primary" variant="flat">
                  Flat
                </Button>
                <Button color="primary" variant="faded">
                  Faded
                </Button>
                <Button color="primary" variant="shadow">
                  Shadow
                </Button>
                <Button color="primary" variant="ghost">
                  Ghost
                </Button>
              </Stack>
              <Stack direction="row" spacing={2} className="flex-wrap">
                <Button size="sm" color="primary">
                  Small
                </Button>
                <Button size="md" color="primary">
                  Medium
                </Button>
                <Button size="lg" color="primary">
                  Large
                </Button>
              </Stack>
              <Stack direction="row" spacing={2} className="flex-wrap">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Accordion Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Accordion</Typography>
          </CardHeader>
          <CardBody>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="What is HeroUI?"
              >
                <Typography variant="body2">
                  HeroUI is a beautiful React component library built with
                  Tailwind CSS.
                </Typography>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="How to install?"
              >
                <Typography variant="body2">
                  Install HeroUI using npm, yarn, pnpm, or bun package manager.
                </Typography>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Is it free?"
              >
                <Typography variant="body2">
                  Yes, HeroUI is completely free and open source.
                </Typography>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>

        {/* Avatar Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Avatar</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Stack direction="row" spacing={4} className="items-center">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar name="JD" />
                <Avatar name="Jane" color="primary" />
                <Avatar name="John" color="secondary" />
                <Avatar name="Jane Doe" color="success" />
              </Stack>
              <Stack direction="row" spacing={4} className="items-center">
                <Avatar size="sm" name="Small" />
                <Avatar size="md" name="Medium" />
                <Avatar size="lg" name="Large" />
              </Stack>
              <AvatarGroup max={3}>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              </AvatarGroup>
            </Stack>
          </CardBody>
        </Card>

        {/* Badge Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Badge</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Stack direction="row" spacing={4} className="items-center">
                <Badge content="5" color="danger">
                  <Button>Notifications</Button>
                </Badge>
                <Badge content="99+" color="danger">
                  <Button>Messages</Button>
                </Badge>
                <Badge content="New" color="success">
                  <Button>Updates</Button>
                </Badge>
              </Stack>
              <Stack direction="row" spacing={4} className="items-center">
                <Badge content="5" size="sm" color="primary">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </Badge>
                <Badge content="99+" size="md" color="secondary">
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                </Badge>
                <Badge content="New" size="lg" color="success">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026702d" />
                </Badge>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Breadcrumbs Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Breadcrumbs</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
              </Breadcrumbs>
              <Breadcrumbs separator="/">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>About</BreadcrumbItem>
                <BreadcrumbItem>Contact</BreadcrumbItem>
              </Breadcrumbs>
            </Stack>
          </CardBody>
        </Card>

        {/* Divider Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Divider</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Divider />
              <Stack direction="row" spacing={4} className="items-center">
                <Typography variant="body2">Left</Typography>
                <Divider orientation="vertical" className="h-6" />
                <Typography variant="body2">Right</Typography>
              </Stack>
              <Divider className="my-4" />
              <Typography variant="body2" className="text-center">
                Centered text with divider
              </Typography>
            </Stack>
          </CardBody>
        </Card>

        {/* Link Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Link</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Stack direction="row" spacing={4} className="flex-wrap">
                <Link href="#" color="primary">
                  Primary Link
                </Link>
                <Link href="#" color="secondary">
                  Secondary Link
                </Link>
                <Link href="#" color="success">
                  Success Link
                </Link>
                <Link href="#" color="warning">
                  Warning Link
                </Link>
                <Link href="#" color="danger">
                  Danger Link
                </Link>
              </Stack>
              <Stack spacing={2}>
                <Link href="#" size="sm">
                  Small Link
                </Link>
                <Link href="#" size="md">
                  Medium Link
                </Link>
                <Link href="#" size="lg">
                  Large Link
                </Link>
              </Stack>
              <Link href="#" isBlock showAnchorIcon>
                Link with icon
              </Link>
            </Stack>
          </CardBody>
        </Card>

        {/* Pagination Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Pagination</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Pagination total={10} initialPage={1} />
              <Pagination total={20} initialPage={1} color="primary" />
              <Pagination total={10} initialPage={1} size="sm" />
              <Pagination total={10} initialPage={1} size="lg" />
            </Stack>
          </CardBody>
        </Card>

        {/* Popover Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Popover</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Popover
                isOpen={isPopoverOpen}
                onOpenChange={onPopoverOpenChange}
              >
                <PopoverTrigger>
                  <Button color="primary" onPress={onPopoverOpen}>
                    Open Popover
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <Typography variant="body2" className="font-bold">
                      Popover Content
                    </Typography>
                    <Typography variant="body2" className="text-small">
                      This is a popover example with some content.
                    </Typography>
                  </div>
                </PopoverContent>
              </Popover>
            </Stack>
          </CardBody>
        </Card>

        {/* Skeleton Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Skeleton</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Skeleton className="h-4 w-3/5 rounded-lg" />
                <Skeleton className="h-4 w-4/5 rounded-lg" />
                <Skeleton className="h-4 w-2/5 rounded-lg" />
              </Stack>
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300" />
              </Skeleton>
              <Stack direction="row" spacing={2}>
                <Skeleton className="h-12 w-12 rounded-full" />
                <Stack spacing={2} className="flex-1">
                  <Skeleton className="h-3 w-3/5 rounded-lg" />
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </Stack>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Slider Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Slider</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Slider
                aria-label="Volume"
                step={1}
                maxValue={100}
                minValue={0}
                value={sliderValue}
                onChange={(value) => setSliderValue(value as number[])}
                className="max-w-md"
              />
              <Typography variant="body2">Value: {sliderValue[0]}</Typography>
              <Slider
                aria-label="Volume"
                step={10}
                maxValue={100}
                minValue={0}
                defaultValue={50}
                color="primary"
                className="max-w-md"
              />
              <Slider
                aria-label="Volume"
                step={10}
                maxValue={100}
                minValue={0}
                defaultValue={30}
                color="secondary"
                className="max-w-md"
              />
            </Stack>
          </CardBody>
        </Card>

        {/* Tooltip Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Tooltip</Typography>
          </CardHeader>
          <CardBody>
            <Stack direction="row" spacing={4} className="flex-wrap">
              <Tooltip content="This is a tooltip">
                <Button color="primary">Hover me</Button>
              </Tooltip>
              <Tooltip content="Tooltip with color" color="secondary">
                <Button color="secondary">Hover me</Button>
              </Tooltip>
              <Tooltip content="Tooltip with placement" placement="top">
                <Button color="success">Top</Button>
              </Tooltip>
              <Tooltip content="Tooltip with placement" placement="bottom">
                <Button color="warning">Bottom</Button>
              </Tooltip>
              <Tooltip content="Tooltip with placement" placement="left">
                <Button color="danger">Left</Button>
              </Tooltip>
              <Tooltip content="Tooltip with placement" placement="right">
                <Button color="default">Right</Button>
              </Tooltip>
            </Stack>
          </CardBody>
        </Card>

        {/* ErrorBoundary Example */}
        <Card>
          <CardHeader>
            <Typography variant="h3">ErrorBoundary</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Typography variant="body1" color="secondary">
                ErrorBoundary catches errors in child components and displays a
                fallback UI. Click the button below to trigger an error.
              </Typography>

              <ErrorBoundary
                onError={(error, errorInfo) => {
                  console.error(
                    "Error caught by ErrorBoundary:",
                    error,
                    errorInfo
                  );
                }}
                fallback={(error, reset) => (
                  <Stack
                    spacing={4}
                    className="p-4 border border-danger rounded-lg"
                  >
                    <Typography variant="h4" color="danger">
                      Error Caught!
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      {error.message}
                    </Typography>
                    <Button color="primary" size="sm" onPress={reset}>
                      Reset
                    </Button>
                  </Stack>
                )}
              >
                <ErrorTrigger />
              </ErrorBoundary>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </HeaderLayout>
  );
}

// Component that throws an error for demonstration
function ErrorTrigger() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("This is a test error to demonstrate ErrorBoundary!");
  }

  return (
    <Button
      color="danger"
      variant="bordered"
      onPress={() => setShouldError(true)}
    >
      Trigger Error
    </Button>
  );
}
