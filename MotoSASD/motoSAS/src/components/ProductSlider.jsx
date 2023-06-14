import React, { useEffect, useState} from 'react'
//import swiper react components

import {Swiper, SwiperSlide} from 'swiper/react'

//import  swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

import {Pagination, Navigation} from 'swiper'

//components
import Product from '../components/Product';
import useFetch from '../hooks/useFetch';



function ProductSlider ()  {
  const {result} = useFetch(
    'http://localhost:1337//products?populate=*&filters[isNew]=true'
  );
 console.log(result);
  
 return(
  <div>
    <h1>Ultimos Productos </h1>
    {result.data-Map((products) => (
      <h2>{products.attributes.tittle}</h2>
    ))}
  </div>
  
 ) 


  
};


export default ProductSlider