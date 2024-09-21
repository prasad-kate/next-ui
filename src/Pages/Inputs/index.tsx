import WithRootLayout from "../../HOCs/withRootLayout";
import TextInputs from "./components/TextInputs";

function Inputs() {
  return (
    <div>
      <TextInputs />
    </div>
  );
}
export default WithRootLayout({
  component: <Inputs />,
});
