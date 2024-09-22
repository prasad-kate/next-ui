import WithRootLayout from "../../HOCs/withRootLayout";
import DateInputs from "./components/DateInputs";
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
      <SwitchInputs />
    </div>
  );
}
export default WithRootLayout({
  component: <Inputs />,
});
