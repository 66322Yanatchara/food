import React, { useState } from "react";
import Navbar from './component/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import cart from "./pages/cart/cart"
import placeOrder from "./pages/placeOrder/placeOrder"
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

    const [showLogin,setShowLogin] = useState(false)

    return (
        <>
        {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
        <div className="app">
            <Navbar setShowLogin={setShowLogin} />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<cart/>}/>
                <Route path='/order' element={<placeOrder/>}/>
            </Routes>
        </div>
        <Footer/>
        </>
    )
}

export default App