import WithRootLayout from "../../HOCs/withRootLayout";
import DateInputs from "./components/DateInputs";
import RadioGroups from "./components/RadioGroups";
import SelectInputs from "./components/SelectInputs";
import SwitchInputs from "./components/SwitchInputs";
import TextAreaInputs from "./components/TextAreaInputs";
import TextInputs from "./components/TextInputs";

function Inputs() {
  return (
    <div>
      <TextInputs />
      <DateInputs />
      <SelectInputs />
      <TextAreaInputs />
      <RadioGroups />
      <SwitchInputs />
    </div>
  );
}
export default WithRootLayout({
  component: <Inputs />,
});
