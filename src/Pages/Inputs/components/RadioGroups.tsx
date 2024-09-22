import { Radio, RadioGroup } from "@nextui-org/react";
import Title from "../../../components/Title";

function RadioGroups() {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <Title className="col-span-4" title="Radio buttons" />
      <RadioGroup label="Select your favorite city">
        <Radio value="buenos-aires">Buenos Aires</Radio>
        <Radio value="sydney">Sydney</Radio>
        <Radio value="san-francisco">San Francisco</Radio>
      </RadioGroup>

      <RadioGroup label="Select your favorite city" color="warning">
        <Radio value="canberra" description="The capital of Australia">
          Canberra
        </Radio>
        <Radio value="london" description="The capital of England">
          London
        </Radio>
        <Radio value="tokyo" description="The capital of Japan">
          Tokyo
        </Radio>
      </RadioGroup>

      <RadioGroup label="Select your favorite city" orientation="horizontal">
        <Radio value="san-francisco">San Francisco</Radio>
        <Radio value="london">London</Radio>
        <Radio value="tokyo">Tokyo</Radio>
      </RadioGroup>
    </div>
  );
}

export default RadioGroups;
