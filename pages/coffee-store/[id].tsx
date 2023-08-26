import React from "react";
import { useRouter } from "next/router";

import coffeeStores from "../../data/coffee-stores.json";

export function getStaticProps({ params }: { params: { id: number } }) {
  return {
    props: {
      coffeeStore: coffeeStores.find(
        (coffeeStore) => coffeeStore.id === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: 0 } }, { params: { id: 1 } }],
  };
}

const CoffeeStore = () => {
  return <div>CoffeeStore</div>;
};

export default CoffeeStore;
