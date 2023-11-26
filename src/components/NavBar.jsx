import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

import MenuItems from "./Navbar/MenuItems";
import DisclosurePanel from "./Navbar/DisclosurePanel";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <MenuItems menuOpen={open} />
            <DisclosurePanel />
          </>
        )}
      </Disclosure>
    </>
  );
}
