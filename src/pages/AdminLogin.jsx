import React  from "react";
import { Form, Formik, ErrorMessage,Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import './AdminLogin.css';

const AdminLogin = () => {
    const initialValues = { email: '', password: '' }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })

    const navigate = useNavigate()

    const handleSubmit = (values) => {
        if (values.email === "admin@moz.com" && values.password === "12345") {
          alert("login success");
          navigate("/account/admin");
        } else {
          alert("login failed");
        }
      }
    
    return (
      <div className="adminlogin">
        <h2 className="adh">Admin Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
                <Form className="regform">
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" className="error" />
                  <br />
                  <Field type="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className="error" />
                  <br />
                  <button type="submit" className="a-login" >LOGIN</button><br/>
                </Form>
        )}
        </Formik>
          
          
      </div>
    )}
  
  
  export default AdminLogin;