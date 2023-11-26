import { createContext, useContext } from "react";

import { navigationList } from "../helpers/navigationList";

function setCurrentNav(index) {
  for (let i = 0; i < this.navlist.length; i++) {
    if (i == index) {
      this.navlist[i].current = true;
    } else {
      this.navlist[i].current = false;
    }
  }
}

export const NavigationContext = createContext({
  navlist: navigationList,
  setCurrentNav: setCurrentNav,
});

export default function NavigationProvider(props) {
  const navigation = useContext(NavigationContext);
  return (
    <NavigationContext.Provider value={navigation}>
      {props.children}
    </NavigationContext.Provider>
  );
}
