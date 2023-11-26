import { useContext } from "react";
import TasksPage from "../../components/Tasks/TasksPage";

import { NavigationContext } from "../../store/Navigation";
import { NAVIGATION_ENUM } from "../../helpers/navigationList";

export default function TasksIndex() {
  const navigationCtx = useContext(NavigationContext);
  navigationCtx.setCurrentNav(NAVIGATION_ENUM.TASKS);

  return (
    <>
      <TasksPage />
    </>
  );
}
