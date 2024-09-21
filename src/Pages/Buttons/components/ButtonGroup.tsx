import { Button, ButtonGroup as NextUiButtonGroup } from "@nextui-org/react";
import Title from "../../../components/Title";

function ButtonGroup() {
  return (
    <div>
      <Title title="button-group" />
      <NextUiButtonGroup color="secondary" size="md">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </NextUiButtonGroup>
    </div>
  );
}

export default ButtonGroup;
