import React, { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Navbar from './components/Navbar.jsx';
import axios from 'axios';
import ProductCardOne from './pages/ProductCardOne.jsx';

const App = () => {
 const[location,setLocation] = useState();
  const[openDropDown,setOpenDropDown]=useState(false);
  const getLocation=async ()=>{
    navigator.geolocation.getCurrentPosition(async(pos)=>{
      const{latitude,longitude}=pos.coords;
      const url=`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try{
        const location=await axios.get(url);
        const exactLocation=location.data.address;
        setLocation(exactLocation);
        setOpenDropDown(false);
      }
      catch(err){
        console.log(err);
      }
    })
  }
  useEffect(()=>{
    getLocation();
  },[])
  return (
    <BrowserRouter>
    <Navbar openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} location={location} getLocation={getLocation}/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:id" element={<ProductCardOne/>}></Route>
      <Route path="/cart" element={<Cart location={location} getLocation={getLocation}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App