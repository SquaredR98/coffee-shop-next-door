import { Abril_Fatface } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const abrilFatface = Abril_Fatface({
	weight: '400',
	style: 'normal',
	display: 'swap',
	subsets: ['latin'],
});

const Card = ({ title, imageUrl, href }) => {
	return (
			<div className='md:rounded-lg bg-[#000000AA] hover:bg-[#000000CC] bg-opacity-10 transition-all duration-500 ease-in-out backdrop-filter backdrop-blur-sm mt-4'>
				<Link href={href}>
					<h2
						className={`text-2xl text-white ${abrilFatface.className} px-5 pt-3`}
					>
						{title}
					</h2>
					<Image
						src={imageUrl}
						alt={title}
						className='w-full h-52 bg-cover p-5 pt-1 object-cover'
						width={260}
						height={160}
					/>
				</Link>
			</div>
	);
};

export default Card;
