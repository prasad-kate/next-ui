import WithRootLayout from "../../HOCs/withRootLayout";
import DateInputs from "./components/DateInputs";
import SelectInputs from "./components/SelectInputs";
import TextAreaInputs from "./components/TextAreaInputs";
import TextInputs from "./components/TextInputs";

function Inputs() {
  return (
    <div>
      <TextInputs />
      <DateInputs />
      <SelectInputs />
      <TextAreaInputs />
    </div>
  );
}
export default WithRootLayout({
  component: <Inputs />,
});
