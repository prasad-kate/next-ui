import { Input } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { GlobalTextInputProps } from "../types";

const TextInput = ({
  name,
  label,
  required,
  ...rest
}: GlobalTextInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          radius="sm"
          label={label}
          status={error ? "error" : "default"}
          helperText={error ? "This field is required" : ""}
          {...rest}
        />
      )}
    />
  );
};

export default TextInput;
