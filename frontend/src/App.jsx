import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LogIn from "./pages/LogIn";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/collection" element={<Collection/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product/:productId" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/place-order" element={<PlaceOrder/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App
