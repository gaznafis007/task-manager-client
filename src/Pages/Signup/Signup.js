import React, { useContext } from "react";
import register from "./registration-animation.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { signUp, getProfile } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      name,
      email,
      password,
    };
    console.log(user);
    signUp(email, password)
      .then((res) => {
        let user = res.user;
        console.log(res.user);
        getProfile(name)
          .then((res) => {
            console.log(res.user);
            user = res.user;
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Container>
      <h2 className="text-center my-4">Sign up Now</h2>
      <div className="d-flex w-75 mx-auto justify-content-center align-items-center">
        <Lottie className="w-100" animationData={register}></Lottie>
        <Form className="w-100" onSubmit={handleSignUp}>
          <Form.Group>
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              placeholder="Enter Your Name"
            ></Form.Control>
          </Form.Group>
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
            Sign up
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
