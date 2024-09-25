import {
  Checkbox as NextUiCheckbox,
  CheckboxGroup as NextUiCheckoxGroup,
} from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { GlobalCheckboxGroupProps } from "../types";

const Checkbox = ({
  name,
  label,
  required,
  options,
  ...rest
}: GlobalCheckboxGroupProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? "This field is required" : false }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <NextUiCheckoxGroup {...field} {...rest} value={field.value || []}>
              {options.map((option) => (
                <NextUiCheckbox key={option.value} value={option.value}>
                  {option.display_name}
                </NextUiCheckbox>
              ))}
            </NextUiCheckoxGroup>
            {error && <div className="text-sm text-[red]">{error.message}</div>}
          </div>
        )}
      />
    </div>
  );
};

export default Checkbox;
