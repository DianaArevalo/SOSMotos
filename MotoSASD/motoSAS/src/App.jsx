
import React from 'react';

import {
  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  createRoutesFromElements, 
  Route
} from 'react-router-dom'
// ERROR ES6 al mezclar importaciones y exportaciones
// Para resolver el error, 
// asegúrese de importar las exportaciones por 
// defecto sin usar llaves e importar las 
// exportaciones con nombre con llaves.
//pages 
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Search from './pages/Search'

// components
import Header from './components/Header'
import Footer from './components/Footer'



//import useFetch from './useFet';

// error de usefetch averiguar como arreglarlo en app vite+react
//ANOTACION DIA 21 de mayo del 2021.



// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {path: '/', element: <Home/> },
//       {path: '/products/:id', element: <Products/> },
//       {path: '/product/:id', element: <ProductDetails/> },
//       {path: '/search', element: <Search/> },

//     ],
//   },
// ]);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product' element={<ProductDetails/>}/>
        <Route path='/search' element={<Search/>}/>
        
        
      </Route>
    )
  )

  return (
    <div className='App'>
  <RouterProvider router={router} />

  </div>
  ) 
 
}

export default App
const Root = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div>
      <Outlet/>
    </div>
    <div>
    <Footer/>
    </div>
   

    </>
    
  )
}
