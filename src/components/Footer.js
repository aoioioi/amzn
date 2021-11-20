import Image from 'next/image';
import { useRouter } from 'next/router';
import { SelectorIcon } from '@heroicons/react/solid';

function Footer() {
	const router = useRouter();

	return (
		<div className="text-sm text-white">
			<div className="flex align-center justify-center bg-amazon_blue-lighter py-4">
				<p className="link" onClick={() => router.push('#')}>Back to top</p>
			</div>
			<div className="bg-amazon_blue-light">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto px-6 py-24">
					<div>
						<div className="">
							<h5 className="font-bold px-1">Get to Know Us</h5>
							<p className="link">Careers</p>
							<p className="link">Blog</p>
							<p className="link">About Amazon</p>
							<p className="link">Sustainability</p>
							<p className="link">Investor Relations</p>
						</div>
					</div>
					<div>
						<div className="">
							<h5 className="font-bold mt-5 md:mt-0 px-1">Make Money with Us</h5>
							<p className="link">Careers</p>
							<p className="link">Blog</p>
							<p className="link">About Amazon</p>
							<p className="link">Sustainability</p>
							<p className="link">Investor Relations</p>
						</div>
					</div>
					<div>
						<div className="">
							<h5 className="font-bold mt-5 lg:mt-0 px-1">Amazon Payment Products</h5>
							<p className="link">Careers</p>
							<p className="link">Blog</p>
							<p className="link">About Amazon</p>
							<p className="link">Sustainability</p>
							<p className="link">Investor Relations</p>
						</div>
					</div>
					<div>
						<div className="">
							<h5 className="font-bold mt-5 lg:mt-0 px-1">Let Us Help You</h5>
							<p className="link">Careers</p>
							<p className="link">Blog</p>
							<p className="link">About Amazon</p>
							<p className="link">Sustainability</p>
							<p className="link">Investor Relations</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center flex-grow sm:flex-grow-0 pt-16 pb-72 bg-amazon_blue">
				<div className="hover:outline-white hover:rounded-sm pt-1">
					<Image
						onClick={() => router.push('/')}
						src='https://links.papareact.com/f90'
						width={150}
						height={30}
						objectFit='contain'
						className='cursor-pointer'
					/>
				</div>
				<div className="flex space-x-3 text-xs mx-2">
					<div className="flex items-center cursor-pointer px-8 py-2 border border-gray-400 rounded-sm">
						<p>English</p>
						<SelectorIcon className="h-4 w-4 ml-3" />
					</div>
					<div className="cursor-pointer px-8 py-2 border border-gray-400 rounded-sm">🇺🇸 United States</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
