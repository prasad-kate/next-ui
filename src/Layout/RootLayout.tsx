import { RootLayoutProps } from "../types";
import RootLayoutSidebar from "./RootLayoutSidebar";

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-[250px] h-screen bg-gray-50 rounded-r-lg">
        <RootLayoutSidebar />
      </div>
      <div className="flex-1 h-screen max-h-screen overflow-auto p-5">
        {children}
      </div>
    </div>
  );
}

export default RootLayout;
