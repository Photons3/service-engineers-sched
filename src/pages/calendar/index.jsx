import { useContext } from "react";
import CalendarPage from "../../components/Calendar/CalendarPage";

import { NavigationContext } from "../../store/Navigation";
import { NAVIGATION_ENUM } from "../../helpers/navigationList";

export default function CalendarIndex() {
  const navigationCtx = useContext(NavigationContext);
  navigationCtx.setCurrentNav(NAVIGATION_ENUM.CALENDAR);

  return <CalendarPage />;
}
