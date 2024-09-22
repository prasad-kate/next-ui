import { Select, SelectItem } from "@nextui-org/react";
import Title from "../../../components/Title";
import { animals } from "../../../Constants/options";

function SelectInputs() {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <Title className="col-span-4" title="Select Inputs" />
      <Select
        items={animals}
        label="Favorite Animal"
        placeholder="Select an animal"
        description="this is single select"
        isRequired
      >
        {(animal) => <SelectItem key={animal.key}>{animal.label}</SelectItem>}
      </Select>

      <Select
        label="Favorite Animal"
        placeholder="Select an animal"
        selectionMode="multiple"
        variant="faded"
        description="this is multi-select"
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>

      <Select
        label="Favorite Animal"
        placeholder="Select an animal"
        selectionMode="multiple"
        description="this is single select with some disabled options"
        disabledKeys={[
          "zebra",
          "tiger",
          "lion",
          "elephant",
          "crocodile",
          "whale",
        ]}
        variant="underlined"
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectInputs;
