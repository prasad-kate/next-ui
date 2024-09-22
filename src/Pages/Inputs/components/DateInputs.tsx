import { getLocalTimeZone, now, parseDate } from "@internationalized/date";
import { DatePicker, DateRangePicker } from "@nextui-org/react";
import Title from "../../../components/Title";

function DateInputs() {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <Title className="col-span-4" title="Date Inputs" />
      <DatePicker label="Birth date" isRequired />
      <DatePicker
        label="Birth date"
        description="This is sample description"
        isRequired
      />
      <DatePicker
        label="Event Date"
        description="This has options for time as well"
        defaultValue={now(getLocalTimeZone())}
        variant="bordered"
        showMonthAndYearPickers
        hideTimeZone
      />
      <DateRangePicker
        label="Date Range Picker"
        isRequired
        defaultValue={{
          start: parseDate("2024-04-01"),
          end: parseDate("2024-04-08"),
        }}
        variant="underlined"
        description="This provides range selection for dates"
      />
    </div>
  );
}

export default DateInputs;
