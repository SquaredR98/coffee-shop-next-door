import React from "react";
import { useRouter } from "next/router";

import coffeeStores from "../../data/coffee-stores.json";
import Link from "next/link";

export function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: {
      coffeeStore: coffeeStores.find(
        (coffeeStore) => coffeeStore.id.toString() === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    fallback: false,
  };
}

const CoffeeStore = ({ coffeeStore }: { coffeeStore: any }) => {
  return <div>
    <Link href="/">Home</Link>
    <h1>Coffee Store: {coffeeStore.name}</h1>
    <p>Coffee Store Address: {coffeeStore.address}</p>
  </div>;
};

export default CoffeeStore;
