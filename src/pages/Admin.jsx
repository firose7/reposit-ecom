import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom'
import './Adminpage.css'
import Header from "../components/Header";
const Admin = () => {

    const navigate = useNavigate()

    function editUser(){
        navigate("/edituser")
    }

    function editProduct(){
        navigate("/productdetails")
    }
    return (
        <Fragment>
        <Header/>
        <div className="adminpage">
            <h1 className="aph1">Welcome Admin</h1>
            <div className="adminedits">
                <p>Edit user details <button onClick={editUser}>Click here!</button></p>
                <br/>
                <p>Edit Product details <button onClick={editProduct}>Click here!</button></p>
            </div>
     
        </div>
        </Fragment>
    )
}

export default Admin;