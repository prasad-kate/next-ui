import { Button } from "@nextui-org/react";
import Title from "../../../components/Title";

function ButtonVariants() {
  return (
    <div>
      <Title title="variants" />
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
      </div>
    </div>
  );
}

export default ButtonVariants;
