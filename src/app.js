import React, { useEffect } from "react";
import { BrowserRouter,  Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from './components/Footer'
import Product from "./pages/Product";
import Cart from './pages/Cart'
import Account from "./pages/Account";
import Register from './pages/Register'
import Login from "./pages/Login"
import Admin from "./pages/Admin";
import Search from "./pages/Search";
import ForgotPassword from "./pages/ForgotPassword";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomerEdit from "./pages/CustomerEdit";
import UserList from "./pages/UsersList";
import AdminLogin from "./pages/AdminLogin";
import ProductDetails from "./pages/ProductDetails";
gsap.registerPlugin(ScrollTrigger)

const App = ({location}) => {

    return (
        <div className="App">

    <BrowserRouter>
            
            <Routes> 
                <Route path="/home" element={<Home />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/account" element={<Account />} />
                <Route path="/account/register" element={<Register />} />
                <Route path="/" element={<Login noCache/>} />
                <Route path="/account/resetpassword" element={<ForgotPassword />} />
                <Route path="/account/admin" element={<Admin />} />
                <Route path="/search/:id" element={<Search />} />
                <Route path="/customeredit" element={<CustomerEdit />} />
                <Route path="/edituser" element={<UserList />} />                
                <Route path="/admin/login" element={<AdminLogin />} />   
                <Route path="/productdetails" element={<ProductDetails/>} />   
                
            </Routes>
            <Footer/>
       </BrowserRouter>
       </div>
)
}

export default App