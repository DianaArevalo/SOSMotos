import React from 'react'
import useFetch from '../hooks/useFetch.js';
import ProductSlider from '../components/ProductSlider.jsx';
import { data } from 'autoprefixer';

// useFetch.js hook

// import useFetch  from '../hooks/useFetch.js'

const Home = () => {
  //get n ew products
  // const {loading, result, error }  = useFetch(
  //  'http://localhost:1337//products?populate=*&filters[isNew]=true'
  // );
  // console.log(result);

  //  if (loading) return <p>Loading...</p>
  //  if (error) return <p>Error</p>

  return (
    <div>
      <ProductSlider/>
    </div>
  )
}

export default Home
