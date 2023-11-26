import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

import MenuItems from "./MenuItems";
import DisclosurePanel from "./DisclosurePanel";

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
