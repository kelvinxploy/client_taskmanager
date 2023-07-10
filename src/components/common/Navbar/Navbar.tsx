import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/form/Button';

type NavbarProps = {
  onCreateTaskClick?: () => void;
  isDetailsPage?: boolean;
};

const Navbar = ({
  isDetailsPage,
  onCreateTaskClick,
}: NavbarProps): React.ReactElement => {
  return (
    <nav className="bg-white shadow-sm mx-auto max-w-7xl p-4 px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between gap-8">
        <Link href="/" className="relative block h-8 w-8">
          <Image
            className=""
            src="https://tailwindui.com/img/logos/mark.svg"
            alt="Your Company"
            layout="fill"
          />
        </Link>

        <div className="flex justify-center flex-1 md:px-8 lg:px-0">
          <div className="md:w-[640px]">
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

        <div className=" lg:flex lg:items-center lg:justify-end">
          <Button
            onClick={!isDetailsPage ? onCreateTaskClick : undefined}
            className="flex gap-1"
          >
            <PlusCircleIcon className="h-6 w-6" />
            Add task
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
