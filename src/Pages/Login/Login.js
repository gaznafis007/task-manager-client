import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Lottie from "lottie-react";
import loginLottie from "./login.json";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const { login } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };
  return (
    <Container>
      <h2 className="text-center my-4">Sign up Now</h2>
      <div className="d-flex w-75 mx-auto justify-content-center align-items-center">
        <Lottie className="w-100" animationData={loginLottie}></Lottie>
        <Form className="w-100" onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Enter Your Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter Your Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
            ></Form.Control>
          </Form.Group>
          <Button className="my-2" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
