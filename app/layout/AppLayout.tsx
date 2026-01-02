"use client";

import { type ReactNode } from "react";
import HeaderLayout from "./HeaderLayout";
import DrawerLayout from "./DrawerLayout";

interface AppLayoutProps {
  children: ReactNode;
  useDrawer?: boolean;
}

export default function AppLayout({
  children,
  useDrawer = false,
}: AppLayoutProps) {
  return useDrawer ? (
    <DrawerLayout>{children}</DrawerLayout>
  ) : (
    <HeaderLayout>{children}</HeaderLayout>
  );
}
