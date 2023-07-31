import React, { Fragment, useEffect, useRef, useState } from "react";
import Styled from 'styled-components'
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux";
import { setCartEmpty } from "../store/CartsReducer";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const Cart = () => {
    const dispatch = useDispatch()
    const checkoutRef = useRef()
    const carts = useSelector((state) => state.Carts.carts)
    const subTotal = useSelector((state) => state.Carts.cartTotal)
    const user = JSON.parse(localStorage.getItem('user'))

    const handleCheckout = () => {
        checkoutRef.current.style.display = 'flex'
        setTimeout(() => {
            checkoutRef.current.style.display = 'none'
        }, 7000)
        dispatch(setCartEmpty())
    }

    return (
    <Fragment>
        <Header/>
        <Container>
        <Title>Shopping Cart</Title>
        {carts.length > 0 ? (
            <>
<CartContainer>
     {carts.map((cart, index) => <CartItem cart={cart} key={index}/>)}
 </CartContainer>
 <TotalContainer>
                <Price><Span>SubTOTAL</Span>RS {subTotal.toFixed(2)}</Price>
     <Disclaimer>Taxes and shipping calculated at checkout</Disclaimer>
     <CheckOut onClick={handleCheckout}>CheckOut</CheckOut>
 </TotalContainer>
            </>

        ): (<Para>No Item in cart</Para>)}
        <Success ref={checkoutRef}>
            <Para>Order has been placed successfully {user.username} 🎊<br/>It will be shipped to the address : {user.address}</Para>
        </Success>  
    </Container>
    </Fragment>)
}

export default Cart;


const Container = Styled.div`
    padding: 2rem;
`

const Title = Styled.h1`
    text-transform: uppercase;
    font-size: 6rem;
    font-weight: 900;
    border-bottom: 0.1rem solid black;
    margin-bottom:5rem;
`

const Para = Styled.p`
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
`

const CartContainer = Styled.div`
display: flex;
flex-direction: column;
gap: 5rem;
border-bottom: 0.1rem solid rgba(0,0,0,0.2);
padding-bottom: 2rem;
`

const TotalContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
margin-top: 3rem;

`

const Price = Styled.h3`
font-size: 3rem;
font-weight: 200;
margin-bottom: 2rem;
`
const Span = Styled.span`
font-size: 3rem;
font-weight: 500;
margin-right: 2rem;
    text-transform: uppercase;
`

const Disclaimer = Styled.p`
font-size: 1.5rem;
font-weight: 400;
color: rgba(0,0,0,0.5);
margin-bottom: 3rem;
`

const CheckOut = Styled.button`
width: 30rem;
height: 5rem;
cursor: pointer;
font-size: 1.5rem;
text-transform: uppercase;
border-radius: 2rem;
transition: 0.35s ease;
background: #2193b0; 
background: -webkit-linear-gradient(to bottom, #6dd5ed, #2193b0); 
background: linear-gradient(to bottom, #6dd5ed, #2193b0); 

&:hover {
    transform: translateY(-10px);

}
`

const Success = Styled.div`
    position: absolute;
    background-color: white;
    border-radius: 2rem;
    width: 70%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    border: 0.1rem solid black;
    display: none;
    align-items: center;
    justify-content: center;
`