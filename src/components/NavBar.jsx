import { Disclosure } from "@headlessui/react";

import MenuItems from "./Navbar/MenuItems";
import DisclosurePanel from "./Navbar/DisclosurePanel";

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <MenuItems menuOpen={open} />
          <DisclosurePanel />
        </>
      )}
    </Disclosure>
  );
}
