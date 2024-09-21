import RootLayout from "../Layout/RootLayout";
import { WithRootLayoutProps } from "../types";

function WithRootLayout({ component }: WithRootLayoutProps) {
  return <RootLayout>{component}</RootLayout>;
}

export default WithRootLayout;
