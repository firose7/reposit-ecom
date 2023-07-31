import React from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { Fragment } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Forgotpassword.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(4, "Passwords must be 4 characters at minimum").required("Password is required"),
});

function ForgotPassword() {
 
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data: users } = await axios.get('http://localhost:8000/users');
      const user = users.find((u) => u.email === values.email);
      if (!user) {
        alert('Email not found. Please enter a valid email address.');
      } else {
        const response = await axios.put(`http://localhost:8000/users/${user.id}`, {
          email: user.email,
          password: values.password,
          username: user.username, 
          address: user.address,
          gender: user.gender,
          number: user.number
      
        });

        if (response.status === 200) {
          alert('Password reset successful!');
          navigate("/")
        } else {
          alert('Password reset failed. Please try again.');
        }
      }

      setSubmitting(false);
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Password reset failed. Please try again.');
      setSubmitting(false);
    }
  };
  

  return (
    <Fragment>
      <div className="forgot">
       
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="reset-form">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
              <br />
              <Field type="password" name="password" placeholder="New Password" />
              <ErrorMessage name="password" component="div" className="error" />
              <br />
              <button type="submit" className="reset-btn" disabled={isSubmitting}>
                RESET PASSWORD
              </button>
              <br />
             
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;