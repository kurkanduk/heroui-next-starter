"use client";

import { useState, type ReactNode } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@heroui/react";
import {
  HomeIcon,
  InformationCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Stack from "@/components/Stack";
import StaticDrawer from "@/components/Drawer";
import Typography from "@/components/Typography";

interface DrawerLayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "About", href: "/about", icon: InformationCircleIcon },
];

export default function DrawerLayout({ children }: DrawerLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Stack direction="column" className="min-h-screen">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            icon={<Bars3Icon className="w-6 h-6" />}
          />
          <NavbarBrand>
            <Stack direction="row" spacing={2} className="items-center">
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onPress={() => setIsCollapsed(!isCollapsed)}
                className="hidden sm:flex"
              >
                {isCollapsed ? "→" : "←"}
              </Button>
              <Typography variant="h3">
                {process.env.NEXT_PUBLIC_APP_NAME || "My App"}
              </Typography>
            </Stack>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavbarMenuItem key={item.href}>
                <Link
                  color="foreground"
                  href={item.href}
                  className="w-full"
                  size="lg"
                  onPress={() => setIsMenuOpen(false)}
                >
                  <Stack direction="row" spacing={3} className="items-center">
                    <Icon className="w-5 h-5 shrink-0" />
                    <span>{item.label}</span>
                  </Stack>
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>

      <Stack direction="row" className="flex-1">
        <StaticDrawer
          isCollapsed={isCollapsed}
          width="w-64"
          className="hidden sm:block bg-content1"
        >
          <div className="p-4">
            <Stack direction="column" spacing={1}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.href}
                    as={Link}
                    href={item.href}
                    variant="light"
                    className={`justify-start ${isCollapsed ? "min-w-0 w-full px-2" : ""}`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Stack
                      direction="row"
                      spacing={3}
                      className={`items-center ${isCollapsed ? "justify-center w-full" : ""}`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && (
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      )}
                    </Stack>
                  </Button>
                );
              })}
            </Stack>
          </div>
        </StaticDrawer>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </Stack>
    </Stack>
  );
}
