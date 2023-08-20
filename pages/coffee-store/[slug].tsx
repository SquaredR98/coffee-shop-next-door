import { useRouter } from 'next/router';
import React from 'react'

const SlugRoute = () => {
const router = useRouter();
console.log(router.query.slug);
  return (
    <div>SlugRoute</div>
  )
}

export default SlugRoute