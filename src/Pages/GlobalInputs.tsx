import { FormProvider, useForm } from "react-hook-form";
import DatePicker from "../components/DatePicker";
import SelectInput from "../components/Select";
import TextAreaInput from "../components/TextArea";
import TextInput from "../components/TextInput";
import { sampleOptions } from "../Constants/options";
import WithRootLayout from "../HOCs/withRootLayout";

function GlobalInputs() {
  const methods = useForm();
  console.log(methods.watch());

  return (
    <FormProvider {...methods}>
      <div className="grid grid-cols-4 gap-5">
        <TextInput name="textInput" label="Text Input" />
        <DatePicker
          name="datePickerInput"
          label="Date Picker"
          showMonthAndYearPickers
        />
        <SelectInput name="select" label="Select" options={sampleOptions} />
        <TextAreaInput
          name="textAreaInput"
          label="Text-area Input"
          minRows={2}
        />
      </div>
    </FormProvider>
  );
}

export default WithRootLayout({ component: <GlobalInputs /> });
