import { Radio, RadioGroup } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { GlobalRadioButtonProps } from "../types";

const RadioButton = ({ name, options, ...rest }: GlobalRadioButtonProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...rest}
        >
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.display_name}
            </Radio>
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default RadioButton;
