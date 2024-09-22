import WithRootLayout from "../../HOCs/withRootLayout";
import DateInputs from "./components/DateInputs";
import SelectInputs from "./components/SelectInputs";
import TextInputs from "./components/TextInputs";

function Inputs() {
  return (
    <div>
      <TextInputs />
      <DateInputs />
      <SelectInputs />
    </div>
  );
}
export default WithRootLayout({
  component: <Inputs />,
});
