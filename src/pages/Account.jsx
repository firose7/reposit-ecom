import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/UserReducer";
import Header from "../components/Header";

const Account = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.User.user);

    const usr = JSON.parse(localStorage.getItem('user'));
    

    const handleLogout = () => {
        dispatch(setUser(null));
        localStorage.removeItem('user');
     
        window.history.replaceState(null, "",window.location.href)
        window.onpopstate = function(){
             window.history.pushState(null,  "",window.location.href)}
        navigate('/');
    }

    const handleEdit = () =>{
        navigate('/customeredit')
    }

    return (
        <Fragment>
            <Header/>
        <Container>
            <Title>Account</Title>
            <Row>
                <Name>{usr.username}</Name><br/><br/>
                <Btn onClick={handleLogout}>Logout</Btn>
                <Btn onClick={handleEdit}>Edit profile</Btn>
            </Row>
        </Container>
        </Fragment>
    )
}

export default Account;

const Container = Styled.div`
    padding: 2rem;
`
const Row = Styled.div`
display: flex;
justify-content: space-between;
`
const Title = Styled.h1`
    font-size: 5rem;
    font-weight: 500;   
    text-transform:uppercase;
    margin-bottom: 2rem;
`

const Btn = Styled.button`
    padding: 1rem 3rem;
    border: .1rem solid red;
    border-radius: 1rem;
    outline: none;
    background-color:black;
    cursor: pointer;
`

const Name = Styled.h3`
    font-size: 2rem;
`