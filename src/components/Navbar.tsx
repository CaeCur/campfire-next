import { useState } from "react";
import Link from "next/link";

//icons import
import { FireIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <nav className="w-full border-b border-blue-300 bg-gray-400 px-2 py-2.5">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo block */}
        <Link href="/" passHref>
          <div className="flex items-center">
            <FireIcon className="mr-1 h-9 text-red-700" />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Campfire
            </span>
          </div>
        </Link>

        {/* mobile menu burger */}
        <button
          onClick={() => setShowMobile(!showMobile)}
          data-collapse-toggle="navbar"
          type="button"
          aria-controls="navbar-default"
          aria-expanded="false"
          className="ml-3 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* nav items */}
        <div
          className={`${!showMobile && "hidden"} w-full md:block md:w-auto`}
          id="navbar"
        >
          <ul className="mt-2 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium ">
            <li className="border-blue-500 hover:text-blue-700">
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </li>

            <li className="border-blue-500 hover:text-blue-700">
              <Link href="/" passHref>
                <a>Campgrounds</a>
              </Link>
            </li>

            <li className="border-blue-500 hover:text-blue-700">
              <Link href="/" passHref>
                <a>Register</a>
              </Link>
            </li>

            <li className="border-blue-500 hover:text-blue-700">
              <Link href="/" passHref>
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
