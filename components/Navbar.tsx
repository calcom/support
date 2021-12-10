/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  VideoCameraIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  DocumentTextIcon,
  CodeIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import Logo from "./Logo";
import classNames from "../lib/classNames";

const resources = [
  {
    name: "Support Documentation",
    description: "Get started with Tips & Tricks",
    href: "https://docs.cal.com",
    icon: (
      <DocumentTextIcon
        className="flex-shrink-0 w-6 h-6 text-gray-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Developer Documentation",
    description: "Build on top or extend Cal",
    href: "https://developer.cal.com",
    icon: (
      <CodeIcon
        className="flex-shrink-0 w-6 h-6 text-gray-600"
        aria-hidden="true"
      />
    ),
  },
];

const community = [
  {
    name: "GitHub",
    description: "Star, Fork or Contribute",
    href: "https://github.com/calendso/calendso",
    icon: (
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        height="32"
        viewBox="0 0 16 16"
        version="1.1"
        width="32"
      >
        <path
          fill="#494949"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Slack",
    description: "Join our vibrant community",
    href: "https://cal.com/slack",
    icon: (
      <svg
        viewBox="0 0 2447.6 2452.5"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipRule="evenodd" fillRule="evenodd">
          <path
            d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
            fill="#494949"
          ></path>
          <path
            d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
            fill="#494949"
          ></path>
          <path
            d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
            fill="#494949"
          ></path>
          <path
            d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
            fill="#494949"
          ></path>
        </g>
      </svg>
    ),
  },
];

export default function Navbar({ border }: { border?: boolean }) {
  return (
    <Popover
      className={classNames(
        "relative sm:fixed z-20 top-0 left-0 right-0 bg-white",
        border ? "border-b" : undefined
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div
            className="flex justify-start px-8 lg:w-0 lg:flex-1"
            style={{ marginLeft: -4 }}
          >
            <Link href="https://cal.com/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>

          <div className="mr-2 -my-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center px-2 py-2 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <Popover.Group as="nav" className="hidden space-x-4 md:flex">
              <Link href="https://cal.com/pricing">
                <a className="px-3 py-2 text-base text-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                  Pricing
                </a>
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="inline-flex items-center px-3 py-2 text-base text-gray-500 group hover:text-black focus:outline-none focus:ring-0">
                      <span className={open ? "text-black" : undefined}>
                        Developers
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          "ml-2 h-5 w-5 transition-transform duration-150 ",
                          open ? "transform rotate-180 text-black" : undefined
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid bg-white">
                            <span className="px-4 pt-4 pb-2 text-sm tracking-widest text-gray-400 uppercase">
                              Resources
                            </span>
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start p-4 hover:bg-gray-50"
                              >
                                {item.icon}
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                            <span className="px-4 pt-4 pb-2 text-sm tracking-widest text-gray-400 uppercase">
                              Community
                            </span>
                            {community.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start p-4 hover:bg-gray-50"
                              >
                                {item.icon}
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link href="https://cal.com/blog">
                <a className="px-3 py-2 text-base text-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                  Blog
                </a>
              </Link>

              <Link href="https://cal.com/jobs">
                <a className="px-3 py-2 text-base text-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                  Jobs
                </a>
              </Link>

              <a
                href="https://app.cal.com"
                className="px-3 py-2 text-base font-medium text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Login
              </a>
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          static
          className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mt-2 -mr-2">
                  <Popover.Button className="inline-flex items-center justify-center px-2 py-2 text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-3 -m-3 group hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-gray-600 bg-gray-100 group-hover:bg-white sm:h-12 sm:w-12">
                          {item.icon}
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                          <p className="text-xs">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </nav>
                </div> */}
            </div>
            <div className="px-5 py-6">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/pricing">
                  <a className="text-base font-medium text-gray-700 hover:text-black">
                    Pricing
                  </a>
                </Link>
                <a
                  href="https://docs.cal.com/"
                  className="text-base font-medium text-gray-700 hover:text-black"
                >
                  Docs
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://cal.com/slack"
                  className="text-base font-medium text-gray-700 hover:text-black"
                >
                  Join Slack
                </a>
                <a
                  href="https://developer.cal.com/api/"
                  className="text-base font-medium text-gray-700 hover:text-black"
                >
                  API
                </a>
                <Link href="/blog">
                  <a className="text-base font-medium text-gray-700 hover:text-black">
                    Blog
                  </a>
                </Link>
                <Link href="/enterprise">
                  <a className="text-base font-medium text-gray-700 hover:text-black">
                    Enterprise
                  </a>
                </Link>
                <Link href="/jobs">
                  <a className="text-base font-medium text-gray-700 hover:text-black">
                    Jobs
                  </a>
                </Link>
                <Link href="/merch">
                  <a className="text-base font-medium text-gray-700 hover:text-black">
                    Merch
                  </a>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/signup">
                  <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent shadow-sm hover:opacity-90">
                    Get Started
                  </a>
                </Link>
                <p className="mt-6 text-base font-medium text-center text-black">
                  Existing customer?{" "}
                  <a
                    href="https://app.cal.com"
                    className="text-black underline hover:opacity-90"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
