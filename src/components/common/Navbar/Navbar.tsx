import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import { BellIcon } from '@heroicons/react/24/outline';
import React from 'react';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const Navbar = (): React.ReactElement => {
  return (
    <nav className="bg-white shadow-sm lg:static lg:overflow-y-visible">
      <>
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

        <div className="lg:hidden" aria-label="Global">
          <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className="block rounded-md py-2 px-3 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.email}
                </div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    </nav>
  );
};
export default Navbar;
