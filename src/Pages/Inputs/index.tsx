import WithRootLayout from "../../HOCs/withRootLayout";
import DateInputs from "./components/DateInputs";
import TextInputs from "./components/TextInputs";

function Inputs() {
  return (
    <div>
      <TextInputs />
      <DateInputs />
    </div>
  );
}
export default WithRootLayout({
  component: <Inputs />,
});
