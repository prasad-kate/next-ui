import { Input } from "@nextui-org/react";
import Title from "../../../components/Title";
import { InputRadius, InputVariants } from "../../../types";

function TextInputs() {
  const variants: InputVariants[] = ["flat", "faded", "bordered", "underlined"];
  const radius: InputRadius[] = ["full", "lg", "md", "sm", "none"];
  return (
    <div className="grid grid-cols-4 gap-5">
      {/* variants */}
      <Title className="col-span-4" title="Variants" />
      {variants.map((variant) => (
        <div
          key={variant}
          className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <Input type="email" variant={variant} label="Email" isRequired />
        </div>
      ))}

      {/* radius */}
      <Title className="col-span-4" title="Radius" />
      {radius.map((r) => (
        <Input
          key={r}
          radius={r}
          type="email"
          label="Email"
          placeholder="Enter your email"
          defaultValue="sample@mail.com"
        />
      ))}
    </div>
  );
}

export default TextInputs;
