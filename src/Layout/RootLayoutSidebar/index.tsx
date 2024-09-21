import { menuItems } from "../../Constants/sidebar.constants";
import MenuItem from "./components/MenuItem";

function RootLayoutSidebar() {
  return (
    <div className="p-2">
      {menuItems?.map(({ name, path }) => {
        return <MenuItem key={path} path={path} name={name} />;
      })}
    </div>
  );
}

export default RootLayoutSidebar;
