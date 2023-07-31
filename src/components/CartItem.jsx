import React from "react";
import Styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartsReducer";

const CartItem = ({ cart }) => {
    const products = useSelector((state) => state.Products.products)
    const product = products.find(product => product.id === cart.id)
    const dispatch = useDispatch()

    return (
        <Container>
            <DetailContainer>
                <Image src={product.image} />
                <Detail>
                    <Title>{product.title}</Title>
                    <Price>RS {product.price.toFixed(2)}</Price>
                </Detail>
            </DetailContainer>
            <QuantityContainer>
                <Price>RS {(product.price * cart.qty).toFixed(2)}  </Price>
                <CartBtn>
                    <Btn onClick={() => dispatch(removeFromCart(cart.id))}>-</Btn>
                    <Qty>{cart.qty}</Qty>
                    <Btn onClick={() => dispatch(addToCart(cart))}>+</Btn>
                </CartBtn>
            </QuantityContainer>
        </Container>
    )
}
export default CartItem

const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
const DetailContainer = Styled.div`
    display: flex;
    gap: 2rem;
`

const Image = Styled.img`
    width: 25rem;
    height: 30rem;
    border-radius: 2rem;
    object-fit: contain;
`

const Detail = Styled.div`
 display: flex;
 flex-direction: column;
 gap: 2rem;
`

const Title = Styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
`

const Price = Styled.p`
font-size: 2rem;
    color: rgba(0,0,0,0.3);
    border-bottom: 0.1rem solid black;
`

const QuantityContainer = Styled.div`
 display: flex;
 flex-direction: column;
 gap: 2rem;
 margin-right: 10rem;
 `

const CartBtn = Styled.div`
    width: 20rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
    border: 0.1rem solid black;
`

const Btn = Styled.button`
width: 100%;
height: 100%;
cursor: pointer;
outline: none;
background-color: transparent;
border: none;
font-size: 2rem;
transition: 0.35s ease;
&:hover {
    background-color:rgba(0,0,0,0.5)
    
}
`
const Qty = Styled.p`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
font-weight: 900;
`
