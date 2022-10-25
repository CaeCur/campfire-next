import { useState } from "react";
import Link from "next/link";

//icons import
import { FireIcon, Bars3Icon } from "@heroicons/react/24/solid";

const navItems: { name: string; dest: string }[] = [
  { name: "Home", dest: "/" },
  { name: "Campgrounds", dest: "/campgrounds" },
  { name: "Register", dest: "/register" },
  { name: "Login", dest: "/login" },
];

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  //trying to figure out animation for mobile menu
  // const growMobileMenu = () => {
  //   if (mobileHeight === "h-0") {
  //     setMobileHeight("h-full");
  //   } else {
  //     setMobileHeight("h-0");
  //   }
  // };

  return (
    <nav className="sticky top-0 z-50 mt-0 w-full bg-slate-900 px-2 py-2.5 md:fixed md:bg-transparent md:bg-gradient-to-b md:from-slate-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-white">
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
          data-collapse-toggle="navMenu"
          type="button"
          aria-controls="navbar-default"
          aria-expanded="false"
          className="rounded-lg bg-slate-600 p-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-100 md:hidden"
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* nav items */}
        <div
          className={`${
            !showMobile && "hidden"
          } w-full transition-all duration-500 ease-out md:block md:h-full md:w-auto`}
          id="navMenu"
        >
          <ul className="flex flex-col p-2 duration-300 ease-out sm:transition-none md:flex-row md:space-x-4 md:text-sm md:font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer rounded-lg py-1 px-2 transition duration-500 ease-in-out hover:bg-blue-800 hover:bg-opacity-80"
              >
                <Link href={item.dest} passHref>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
