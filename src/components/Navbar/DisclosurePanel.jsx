import { useContext } from "react";
import Link from "next/link";

import { Disclosure } from "@headlessui/react";

import classNames from "@/helpers/classNames";

import { NavigationContext } from "../../store/Navigation";

export default function DisclosurePanel() {
  const navigationCtx = useContext(NavigationContext);
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigationCtx.navlist.map((item, index) => {
          return (
            <>
              <Link
                key={`${item.name}`}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            </>
          );
        })}
      </div>
    </Disclosure.Panel>
  );
}
