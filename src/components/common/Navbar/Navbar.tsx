import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Navbar = (): React.ReactElement => {
  return (
    <nav className="bg-white shadow-sm lg:static lg:overflow-y-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div className="flex flex-shrink-0 items-center">
              <a href="#">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=sky&shade=600"
                  alt="Your Company"
                />
              </a>
            </div>
          </div>
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <PlusCircleIcon className="h-6 w-6" />
              Add task
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
