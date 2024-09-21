import { TitleProps } from "../types";

function Title({ title, className }: TitleProps) {
  return (
    <div className={`text-sm font-bold underline mb-2 ${className}`}>
      {title}
    </div>
  );
}

export default Title;
