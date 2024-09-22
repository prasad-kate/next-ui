import { Switch } from "@nextui-org/react";
import Title from "../../../components/Title";

function SwitchInputs() {
  return (
    <div className="grid grid-cols-6 gap-5 mt-5">
      <Title className="col-span-6" title="Switch Inputs" />
      <Switch defaultSelected color="default">
        Default
      </Switch>
      <Switch defaultSelected color="primary">
        Primary
      </Switch>
    </div>
  );
}

export default SwitchInputs;
