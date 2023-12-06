import { Fragment, useState } from 'react';
import PrimeVideoSlideOver from './PrimeVideoSlideOver';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function MenuSlideOver({ open, setOpen }) {
	const { data: session } = useSession();
  const [primeVidOpen, setPrimeVidOpen] = useState(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-auto z-[900]" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Overlay Animation */}
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed w-[365px] inset-y-0 left-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-700"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button
                type="button"
                className="absolute top-4 right-6 z-10 rounded-md text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col pb-14 bg-amazon_blue shadow-xl text-white overflow-y-auto">
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
                  <div className="mt-3 relative flex-1">
                    <h4 className="text-xl mb-1 font-semibold px-10 cursor-default">Trending</h4>
                    <div className="text-sm border-b border-gray-400">
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Best Sellers</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">New Releases</a>
                    </div>
                    <h4 className="text-xl mt-4 mb-1 font-semibold px-10 cursor-default">Digital Content & Devices</h4>
                    <div className="text-sm border-b border-gray-400">
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/" onClick={() => setPrimeVidOpen(true)}>Prime Video</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Amazon Music</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Echo & Alexa</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Fire Tablets</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Fire TV</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Kindle E-Readers & Books</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Audible Books & Originals</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Appstore for Android</a>
                    </div>
                    <h4 className="text-xl mt-4 mb-1 font-semibold px-10 cursor-default">Shop By Department</h4>
                    <div className="text-sm border-b border-gray-400">
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Books</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Movies, Music & Games</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Electronics</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">See All</a>
                    </div>
                    <h4 className="text-xl mt-4 mb-1 font-semibold px-10 cursor-default">Programs & Features</h4>
                    <div className="text-sm border-b border-gray-400">
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Whole Foods Market</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Amazon Pharmacy</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Amazon Physical Stores</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Subscribe & Save</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">See All</a>
                    </div>
                    <h4 className="text-xl mt-4 mb-1 font-semibold px-10 cursor-default">Help & Settings</h4>
                    <div className="text-sm">
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Your Account</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">
                        <GlobeAltIcon className="h-4 w-4 mr-1 inline" />
                        Language: English</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">🇺🇸 United States</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Amazon Physical Stores</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Customer Service</a>
                      <a className="px-10 py-3 hover:bg-amazon_blue-light" href="/">Sign In</a>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
        {/* <PrimeVideoSlideOver
          primeVidOpen={primeVidOpen}
          setPrimeVidOpen={() => setPrimeVidOpen(false)}
        /> */}
      </Dialog>
    </Transition.Root>
  );
}
