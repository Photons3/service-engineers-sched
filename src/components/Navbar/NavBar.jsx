import { Disclosure } from "@headlessui/react";

import MenuItems from "./MenuItems";
import DisclosurePanel from "./DisclosurePanel";

export default function NavBar() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <MenuItems menuOpen={open} />
            <DisclosurePanel key={"DisclosurePanelKey"} />
          </>
        )}
      </Disclosure>
    </>
  );
}
