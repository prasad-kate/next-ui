import { Textarea, TextAreaProps } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

interface GlobalTextAreaInputProps extends TextAreaProps {
  name: string;
  label: string;
  required?: boolean;
}

const TextAreaInput = ({
  name,
  label,
  required,
  ...rest
}: GlobalTextAreaInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <Textarea
          {...field}
          label={label}
          status={error ? "error" : "default"}
          helperText={error ? error.message : ""}
          {...rest}
        />
      )}
    />
  );
};

export default TextAreaInput;
