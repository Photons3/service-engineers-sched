import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import MarkSVG from "../../../public/static/images/mark.svg";
import classNames from "../../helpers/classNames";

import { NavigationContext } from "../../store/Navigation";

export default function TopNavigation() {
  const navigationCtx = useContext(NavigationContext);

  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <Image
          className="h-8 w-auto"
          width={256}
          height={256}
          src={MarkSVG}
          alt="Logo"
        />
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigationCtx.navlist.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
