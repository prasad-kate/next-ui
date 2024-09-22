import { Checkbox } from "@nextui-org/react";
import Title from "../../../components/Title";

function Checkboxes() {
  return (
    <div className="grid grid-cols-6 gap-5 mt-5">
      <Title className="col-span-6" title="Checkboxes" />
      <Checkbox defaultSelected radius="full">
        Full
      </Checkbox>
      <Checkbox defaultSelected radius="lg">
        Large
      </Checkbox>
      <Checkbox radius="md">Medium</Checkbox>
      <Checkbox radius="sm">Small</Checkbox>
      <Checkbox radius="none">None</Checkbox>
    </div>
  );
}

export default Checkboxes;
