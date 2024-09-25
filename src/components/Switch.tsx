import { Switch as NextUiSwitch } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { GlobalSwitchProps } from "../types";

const Switch: React.FC<GlobalSwitchProps> = ({ name, label, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <NextUiSwitch
          checked={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...rest}
        >
          {label}
        </NextUiSwitch>
      )}
    />
  );
};

export default Switch;
