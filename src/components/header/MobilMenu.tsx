import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../logo/Logo";
import Link from "next/link";

interface MobilMenuProps {
  navlist: { name: string; href: string }[];
  open: boolean | undefined;
  setOpen: (value: boolean) => void;
}
const MobilMenu: React.FC<MobilMenuProps> = ({ open, setOpen, navlist }) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-50 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-x-32"
          enterTo="opacity-100 translate-x-[0px]"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-[0px]"
          leaveTo="opacity-0 translate-x-32"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Logo size={18} />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navlist.map((item) => (
                    <Link
                      onClick={() => setOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MobilMenu;
