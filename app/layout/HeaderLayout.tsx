"use client";

import { useState, type ReactNode } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";

interface HeaderLayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function HeaderLayout({ children }: HeaderLayoutProps) {
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
            <Typography variant="h3">
              {process.env.NEXT_PUBLIC_APP_NAME || "My App"}
            </Typography>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu>
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                color="foreground"
                href={item.href}
                className="w-full"
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <main className="flex-1">{children}</main>
    </Stack>
  );
}
