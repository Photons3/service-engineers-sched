import { useContext } from "react";
import TeamPage from "../../components/Team/TeamPage";

import { NavigationContext } from "../../store/Navigation";
import { NAVIGATION_ENUM } from "../../helpers/navigationList";

export default function TeamIndex() {
  const navigationCtx = useContext(NavigationContext);
  navigationCtx.setCurrentNav(NAVIGATION_ENUM.TEAM);

  return <TeamPage />;
}
