import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <nav className="flex items-center justify-evenly flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">E-Class</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right px-16">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Courses
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
