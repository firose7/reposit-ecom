import React, { Fragment, useState } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import axios from "axios";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });
  

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data: users } = await axios.get('http://localhost:8000/users');
      const user = users.find((u) => u.email === values.email && u.password === values.password);
    
      if (user) {
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login successful!');
      
        navigate(`/home`);
        
      }
       else {
        alert('Invalid credentials. Login failed!');
      }
      setSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitting(false);
    }
  };

  return (
    <Fragment>
    <div className="l-login">
      <h2 className="login-h2">Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className="l-regform">
            <Field type="email"  name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
            <br />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
            <br />
            <button type="submit" className="l-loginbtn" >LOGIN</button><br />
            <Link to='/account/register'>Create a new Account !</Link><br></br>
            <Link to='/account/resetpassword'>Forgot password ?</Link><br></br>
            <Link to='/admin/login'>Login as Admin</Link><br></br>
          </Form>
        )}
      </Formik>
    </div>
   
    </Fragment>
  );
};

export default Login;


