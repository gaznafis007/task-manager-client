import React from "react";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Foot from "../Components/Foot/Foot";
import NavBar from "../Components/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default Main;
