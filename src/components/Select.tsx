import { Select, SelectItem } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { GlobalSelectInputProps } from "../types";

const SelectInput = ({
  name,
  label,
  required,
  options,
  ...rest
}: GlobalSelectInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Select {...field} label={label} isRequired={required} {...rest}>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.display_name}
              </SelectItem>
            ))}
          </Select>
          {error && <div className="text-sm text-[red]">{error.message}</div>}
        </div>
      )}
    />
  );
};

export default SelectInput;
