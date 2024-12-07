import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    // Send login request to backend
    axios.post("http://localhost:8080/loginstudent", {
      email: values.email,
      password: values.password
    }).then((res) => {
      if (res.data === true) {
        // Redirect to the Search page after successful login
        navigate("/PostLoginNavbar ");
      } else {
        alert("Incorrect email or password");
      }
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <div>
              <label>Email: </label>
              <Field name="email" type="email" required />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label>Password: </label>
              <Field name="password" type="password" required />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
