import { TitleProps } from "../types";

function Title({ title }: TitleProps) {
  return <div className="text-sm font-bold underline mb-2">{title}</div>;
}

export default Title;
