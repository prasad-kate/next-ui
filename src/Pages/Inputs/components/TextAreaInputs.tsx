import { Textarea } from "@nextui-org/react";
import Title from "../../../components/Title";

function TextAreaInputs() {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <Title className="col-span-4" title="Text-area Inputs" />
      <Textarea label="Description" placeholder="Enter your description" />
      <Textarea
        label="Description"
        variant="bordered"
        placeholder="Enter your description"
        disableAnimation
        disableAutosize
        classNames={{
          input: "resize-y min-h-[55px] max-h-[200px]",
        }}
      />
    </div>
  );
}

export default TextAreaInputs;
