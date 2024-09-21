import { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode;
}

export interface WithRootLayoutProps {
  component: ReactNode;
}

export interface MenuItemProps {
  path: string;
  name: string;
}

export interface TitleProps {
  title: string;
  className?: string;
}

export type InputVariants = "flat" | "faded" | "bordered" | "underlined";

export type InputRadius = "full" | "lg" | "md" | "sm" | "none";
