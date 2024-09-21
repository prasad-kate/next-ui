import { Button } from "@nextui-org/react";
import Title from "../../../components/Title";

function ButtonColors() {
  return (
    <div>
      <Title title="colors" />
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  );
}

export default ButtonColors;
