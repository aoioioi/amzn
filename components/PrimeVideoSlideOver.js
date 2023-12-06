import { Fragment } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, GlobeIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';

export default function PrimeVideoSlideOver({ primeVidOpen, setPrimeVidOpen }) {
	const { data: session } = useSession();

  return (
    <Transition.Root show={primeVidOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-auto z-[900]" onClose={setPrimeVidOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity" />
          </Transition.Child>
          <div className="fixed w-[362px] inset-y-0 left-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition linear duration-300"
              enterFrom="translate-x-0"
              enterTo="-translate-x-full"
              leave="transform transition linear duration-300"
              leaveFrom="-translate-x-full"
              leaveTo="translate-x-0"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-[350px] -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4 z-[950]">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white px-1"
                      onClick={() => setPrimeVidOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      Back
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col pb-14 bg-amazon_blue shadow-xl text-white overflow-y-auto">
                  <div className="">
                    <Dialog.Title className="text-lg font-medium">
                      <div className="bg-amazon_blue-light py-3">
                        <h4
                          className="text-xl mb-1 font-semibold px-10 cursor-pointer flex items-center"
                          onClick={!session ? signIn : signOut}
                        >
                          <UserCircleIcon className="h-7 w-7 mr-3" />
                          Hello, Sign In</h4>
                      </div>
                    </Dialog.Title>
                  </div>
                  <div className="mt-3 relative flex-1">
                    <h4 className="text-xl mb-1 font-semibold px-10 cursor-default">Trending</h4>
                    <div className="text-sm border-b border-gray-400">
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Best Sellers</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">New Releases</a>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
