import React from 'react';
import BannerBG from '../public/static/bg-banner.jpg';
import Image from 'next/image';
import { Lobster, Abril_Fatface } from 'next/font/google';

interface IBannerPropTypes {
	buttonText: string;
	handleOnClick: () => any;
}

// style={{
// 	backgroundImage: `linear-gradient(to right, #000000, #000000AA, #00000000), url('/static/bg-banner.jpg')`,
// 	backgroundSize: 'contain',
// 	backgroundPositionX: 'right',
// 	backgroundRepeat: 'no-repeat',
// 	maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.0) 50%, transparent 100%);'
// }}

const abrilFatface = Abril_Fatface({ 
	weight: '400',
	style: 'normal',
	display: 'swap',
	subsets: ['latin'],
 })

const Banner = ({ buttonText }: IBannerPropTypes) => {
	return (
		<div className='md:rounded-lg md:mt-10 md:flex bg-[#000000CC] backdrop-blur-md'>
			<div className='py-5 px-4 w-full md:w-4/6 md:py-10 md:px-8 md:flex md:flex-col md:justify-center'>
				<h1
					className={`text-3xl md:text-5xl font-bold text-slate-500 ${abrilFatface.className}`}
				>
					<span className='text-sky-300'>
						Coffee Store,
					</span>{' '}
					Next Door
				</h1>
				<h1 className='text-xl sm:text-3xl text-slate-400 py-3'>
					Find your nearest coffee store
				</h1>
				<button className='text-white md:w-2/3 lg:w-1/3 mt-4 bg-sky-400 px-8 py-4 hover:bg-sky-600 transition-all ease-in-out duration-1000 rounded-sm'>
					{buttonText}
				</button>
			</div>
			<div className='w-0 md:w-2/6 invisible md:visible md:flex md:items-center'>
				<Image
					src={BannerBG}
					alt='banner'
					className='rounded-md p-4 rounded-s-full'
				/>
			</div>
		</div>
	);
};

export default Banner;
