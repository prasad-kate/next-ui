import {
  DatePickerProps,
  InputProps,
  RadioGroupProps,
  SelectProps,
} from "@nextui-org/react";
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

export interface GlobalTextInputProps extends InputProps {
  name: string;
  label: string;
  required?: boolean;
}

export interface GlobalDatePickerProps
  extends Omit<DatePickerProps, "value" | "onChange"> {
  name: string;
  label: string;
  required?: boolean;
}

export interface Option {
  value: string;
  display_name: string;
}

export interface GlobalSelectInputProps
  extends Omit<SelectProps, "onChange" | "value" | "children"> {
  name: string;
  label: string;
  required?: boolean;
  options: Option[];
}

export interface Option {
  value: string;
  display_name: string;
}

export interface GlobalRadioButtonProps extends RadioGroupProps {
  name: string;
  options: Option[];
}
