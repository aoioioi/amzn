import { Fragment, useState } from 'react';

import MenuSlideOver from './MenuSlideOver';

import Image from 'next/image';
import { useRouter } from 'next/router';

import {
	SearchIcon,
	MenuIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';

import { signIn, signOut, useSession } from 'next-auth/client';

import { useSelector } from 'react-redux';
import { selectItems, selectTotalQuantity } from '../slices/basketSlice';

function Header() {
	const [open, setOpen] = useState(false);

	const [disableScroll, setDisableScroll] = useState(false);

	const [session] = useSession();
	const router = useRouter();

	const items = useSelector(selectItems);
	const totalQuantity = useSelector(selectTotalQuantity);

	function openMenuDrawer() {
		setDisableScroll(true);
		setOpen(true);

		if (typeof window === 'object') {
			document.querySelector('body').classList.add('overflow-hidden');
		}
	}

	const closeMenuDrawer = () => {
		setDisableScroll(false);
		setOpen(false);

		if (typeof window === 'object') {
			document.querySelector('body').classList.remove('overflow-hidden');
		}
	};

	return (
		<Fragment>
			<header>
				<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
					<div className="mt-1 flex items-center flex-grow sm:flex-grow-0 hover:outline-white hover:rounded-sm pt-1" >
						<Image
							onClick={() => router.push('/')}
							src='https://links.papareact.com/f90'
							width={150}
							height={40}
							objectFit='contain'
							className='cursor-pointer'
						/>
					</div>
					<div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow ml-1">
						<input
							className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
							type="text"
						/>
						<button><SearchIcon className="h-12 p-4" /></button>
					</div>
					<div className="flex items-center text-xs text-white space-x-6 mx-6 whitespace-nowrap">
						<div onClick={!session ? signIn : signOut} className="link">
							<p>
								{session ? `Hello, ${session.user.name}` : 'Sign in'}
							</p>
							<p className="font-extrabold md:text-sm">Account & Lists</p>
						</div>
						<div className="link" onClick={() => router.push('/orders')}>
							<p>Returns</p>
							<p className="font-extrabold md:text-sm">& Orders</p>
						</div>
						<div
							className="relative link flex items-center pt-3"
							onClick={() => router.push('/checkout')}
						>
							<span className="absolute top-2 right-1 md:top-2 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
								{totalQuantity}
							</span>
							<ShoppingCartIcon className="h-7 mr-1" />
							<p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
						</div>
					</div>
				</div>
				<div className="flex items-center space-x-3 bg-amazon_blue-light p-2 pl-1 md:pl-6 text-white text-sm">
					<p className="link flex items-center">
						<div className="flex items-center" onClick={openMenuDrawer}>
							<MenuIcon className="h-6 mr-1" />
							All
						</div>
					</p>
					<p className="link">Today's Deals</p>
					<p className="link">Customer Service</p>
					<p className="link hidden lg:inline-flex">Prime Video</p>
					<p className="link hidden lg:inline-flex">Electronics</p>
					<p className="link hidden lg:inline-flex">Food & Grocery</p>
					<p className="link hidden lg:inline-flex">Books</p>
					<p className="link hidden lg:inline-flex">Health & Personal Care</p>
					<p className="link hidden lg:inline-flex">Buy Again</p>
				</div>
				<MenuSlideOver
					open={open}
					setOpen={closeMenuDrawer}
				/>
			</header>
		</Fragment >
	);
}

export default Header;
