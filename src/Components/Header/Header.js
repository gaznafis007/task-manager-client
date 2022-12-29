import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import task1 from "./task-manager-1.json";
import task2 from "./coworkers-working-on-business-project-at-office.json";
import task3 from "./business-team.json";

const Header = () => {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <div className="d-flex align-items-center p-5 mx-5">
          <div>
            <h1>Manage your Task!</h1>
            <p className="w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate excepturi eligendi pariatur voluptates praesentium
              minima, rem unde minus quis iste.
              <br />
              <Link className="mt-2 btn btn-primary" to={"/"}>
                Add Your Task
              </Link>
            </p>
          </div>
          <Lottie animationData={task1} className="w-50 mx-auto"></Lottie>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <div className="d-flex align-items-center p-5 mx-5">
          <div>
            <h1>Manage your Task!</h1>
            <p className="w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate excepturi eligendi pariatur voluptates praesentium
              minima, rem unde minus quis iste.
              <br />
              <Link className="mt-2 btn btn-primary" to={"/"}>
                Add Your Task
              </Link>
            </p>
          </div>
          <Lottie animationData={task2} className="w-50 mx-auto"></Lottie>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <div className="d-flex align-items-center p-5 mx-5">
          <div>
            <h1>Manage your Task!</h1>
            <p className="w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate excepturi eligendi pariatur voluptates praesentium
              minima, rem unde minus quis iste.
              <br />
              <Link className="mt-2 btn btn-primary" to={"/"}>
                Add Your Task
              </Link>
            </p>
          </div>
          <Lottie animationData={task3} className="w-50 mx-auto"></Lottie>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
