import Banner from '@/components/Banner';
import Card from '@/components/Card';
import Head from 'next/head';
import Image from 'next/image';

import coffeeStores from '../data/coffee-stores.json';

export default function Home() {
	return (
		<>
			<Head>
				<title>Coffee Store, Next Door</title>
			</Head>
			<main className='w-full mx-auto sm:w-10/12'>
				<Banner
					buttonText='Find store nearby'
					handleOnClick={() => {}}
				/>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
					{coffeeStores.map(({ name, imgUrl, websiteUrl, id }, index) => (
						<Card
							key={index}
							title={name}
							imageUrl={imgUrl}
							href={`/coffee-store/${id}`}
						/>
					))}
				</div>
			</main>
		</>
	);
}
