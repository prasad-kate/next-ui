import WithRootLayout from "../../HOCs/withRootLayout";
import ButtonColors from "./components/ButtonColors";
import ButtonGroup from "./components/ButtonGroup";
import ButtonRadiuses from "./components/ButtonRadiuses";
import ButtonVariants from "./components/ButtonVariants";

function Buttons() {
  return (
    <div className="flex flex-col gap-3">
      <ButtonColors />
      <ButtonVariants />
      <ButtonRadiuses />
      <ButtonGroup />
    </div>
  );
}

export default WithRootLayout({ component: <Buttons /> });
