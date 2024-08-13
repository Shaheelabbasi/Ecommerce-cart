import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Productcard from './Components/Productcard';
import { useDispatch } from 'react-redux'
import { setProducts } from './Features/Productslice';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
import Cart from './Components/Cart';

function App() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true)
  useEffect(() => {

    const fetchproducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      dispatch(setProducts(products));
      setloading(false);
    }
    fetchproducts()

  }, [])
  console.log("loading is ", loading)
  return (
    <>
    <Router>
      <Navbar />
      <Routes>

        <Route path='/' element={<Productcard />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

      </Router>

    </>
  )
}

export default App
