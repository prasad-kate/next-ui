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
}
