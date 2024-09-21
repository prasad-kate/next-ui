import { useNavigate } from "react-router-dom";
import { MenuItemProps } from "../../../types";

function MenuItem({ name, path }: MenuItemProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(path);
      }}
      className="p-2 bg-gray-200 mb-2 cursor-pointer rounded-md text-sm hover:bg-gray-300 transition-background"
    >
      {name}
    </div>
  );
}

export default MenuItem;
