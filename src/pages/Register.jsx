
import React from 'react';
import { Fragment } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(4, "Password must be 4 characters at minimum").required('Password is required'),
    address: Yup.string().required('Address is required'),
    gender: Yup.string().required('Gender is required'),
    number: Yup.string().required('Phone number is required'),

  });

  function Register() {
 
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
    
        alert('REGISTRATION SUCCESSFUL');
        navigate("/")

      };
      
    return (
      <Fragment>
        <div className="r-reg">
          <h1 className='rh'>Welcome to MOZEERAT</h1>
          <Formik
            initialValues={{
              email: '',
              username: '',
              password: '',
              address:'',
              gender:'',
              number:'',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="r-regform">
                <Field type="text" name="username" placeholder="Username" />
                <ErrorMessage name="username" component="div" className="error" />
                <br />
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
                <br />
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error" />
                <br />
                <Field type="text" name="address" placeholder="address" />
                <ErrorMessage name="address" component="div" className="error" />
                <br />
                <Field type="text" name="gender" placeholder="gender" />
                <ErrorMessage name="gender" component="div" className="error" />
                <br />
                <Field type="number" name="number" placeholder="phone" />
                <ErrorMessage name="number" component="div" className="error" />
                <br />
                <button type="submit" className="reg">REGISTER</button>
              </Form>
            )}
          </Formik>
        </div>
      </Fragment>
    );
  }

  export default Register




  