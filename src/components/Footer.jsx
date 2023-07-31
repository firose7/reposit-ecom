import React from "react";
import { Link } from "react-router-dom";
import Styled from 'styled-components'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Category } from "./Header";

const Footer = () => {
    return (
        <Container>
            <LinkContainer>
                <EmailContainer>
                    <Title>Stay in touch</Title>
                    <Para>SIGN UP BELOW FOR EXCLUSIVE UPDATES, OFFERS & FUTURE APJ PRODUCTS</Para>
                    <Row>
                    <Input placeholder="Email"/>
                    <Btn><AiOutlineArrowRight size={18}/></Btn>
                    </Row>
                </EmailContainer>
                <QuickLinkContainer>
                    <Title>Quick link</Title>
                    <LinkList>FAQ</LinkList>
                    <LinkList>CONTACT US</LinkList>
                    <LinkList>Search</LinkList>
                </QuickLinkContainer>
                <SocialContainer>
                    <Title>Let's Connect</Title>
                    <LinkList>Instagram</LinkList>
                    <LinkList>Facebook</LinkList>
                    <LinkList>twitter</LinkList>
                </SocialContainer>
            </LinkContainer>
            <BottomContainer>
                <Para>© 2023, TechStore</Para>
                <Para>Refund policy</Para>
                <Para>Privacy policy</Para>
                <Para>Terms of service</Para>
                <Para>Shipping policy</Para>

            </BottomContainer>
        </Container>
    )
}

export default Footer

const Container = Styled.div`
margin-top: 0.2rem;
    padding: 3rem 5rem;
    border: 0.2rem solid black;
    background-color: rgb(88,134,179);
    
`

const LinkContainer = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
height: 25rem;


@media (max-width:600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    gap: 2rem;
}
`

const EmailContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: top;
padding-top:20px;

`

const Title = Styled.h3`
font-weight: 1000;
text-align: center;
text-transform: uppercase;
margin-bottom: 2rem;
font-size: 16px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`
const Para = Styled.p`
font-weight: 400;
opacity: 0.8;
margin-bottom: 3rem;
font-size: 10px;

`

const Row = Styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Input = Styled.input`
    width: 30rem;
    height:4rem;
`
const Btn = Styled.button`
    width: 5rem;
    height:4rem;
    background-color: black;
    cursor: pointer;
    outline: none;
   
`

const QuickLinkContainer = Styled.div`
    display: flex;
flex-direction: column;
gap: 1rem;
padding-top:20px;
float: right;

`
const LinkList = Styled(Category)`
margin-left: 5rem;

`

const SocialContainer = Styled.div`
    display: flex;
flex-direction: column;
gap: 1rem;
padding-top:20px;
float: right;

`

const BottomContainer = Styled.div`
    width: 100%;
    height: 3rem;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: row;
    gap: 2rem
`
