import { DatePicker as NextUiDatePicker } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { GlobalDatePickerProps } from "../types";

const DatePicker = ({
  name,
  label,
  required,
  ...rest
}: GlobalDatePickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <div>
          <NextUiDatePicker
            {...rest}
            label={label}
            value={field.value || null}
            onChange={(date) => field.onChange(date)}
          />
          {error && <span className="text-sm text-[red]">{error.message}</span>}
        </div>
      )}
    />
  );
};

export default DatePicker;
