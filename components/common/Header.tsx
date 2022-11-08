import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";

type Props = {};

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Header = (props: Props) => {
  const [effect, setEffect] = useState(false);
  const session = useSession();
  const handleEffect = () => {
    setEffect(true);
  };
  const handleClick = () => {
    signOut();
  };
  return (
    <div>
      <nav className="flex items-center justify-evenly flex-wrap bg-cyan-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8"
          >
            <span className="font-semibold text-xl tracking-tight">
              E-Class
            </span>
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right px-16">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/courses"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8"
            >
              Courses
            </Link>
            {session.status == "authenticated" && (
              <>
                <Link
                  href="/grades"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8"
                >
                  Grades
                </Link>
                <Popover className="fixed top-5 right-5">
                  <Popover.Button
                    onClick={handleEffect}
                    className={`${
                      effect && "animate-fadeIn"
                    } focus:outline-none`}
                    onAnimationEnd={() => setEffect(false)}
                  >
                    {" "}
                    <Image
                      className="inline rounded-full"
                      src={session.data?.user?.image}
                      alt="harris"
                      width={40}
                      height={40}
                    />
                  </Popover.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 max-w-xs -translate-x-32 transform px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="bg-white p-5 text-center w-40">
                          <button
                            onClick={handleClick}
                            className="-m-3 w-full px-2 text-center font-medium rounded-lg p-2 hover:cursor-pointer hover:bg-gray-100"
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
