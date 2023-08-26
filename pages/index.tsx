import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Head from "next/head";
import { Abril_Fatface } from "next/font/google";

import coffeeStores from "../data/coffee-stores.json";
import { Fragment } from "react";

const abrilFatface = Abril_Fatface({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export interface ICoffeeItem {
  id: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
}

export async function getStaticProps(
  context: any
): Promise<{ props: { coffeeStores: ICoffeeItem[] } }> {
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home({ coffeeStores }: { coffeeStores: ICoffeeItem[] }) {
  return (
    <>
      <Head>
        <title>Coffee Store, Next Door</title>
      </Head>
      <main className="w-full mx-auto sm:w-10/12">
        <Banner buttonText="Find store nearby" handleOnClick={() => {}} />
        {coffeeStores.length > 0 && (
          <Fragment>
            <h2
              className={`text-4xl text-white mt-4 ${abrilFatface.className}`}
            >
              Toronto Coffee Stores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
              {coffeeStores.map(({ name, imgUrl, websiteUrl, id }, index) => (
                <Card
                  key={index}
                  title={name}
                  imageUrl={imgUrl}
                  href={`/coffee-store/${id}`}
                />
              ))}
            </div>
          </Fragment>
        )}
      </main>
    </>
  );
}
