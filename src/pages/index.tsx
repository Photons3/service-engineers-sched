import { useContext } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";

import { NavigationContext } from "../store/Navigation";
import { NAVIGATION_ENUM } from "../helpers/navigationList";

export default function Home() {
  const navigationCtx = useContext(NavigationContext);
  navigationCtx.setCurrentNav(NAVIGATION_ENUM.DASHBOARD);

  return <Dashboard></Dashboard>;
}
