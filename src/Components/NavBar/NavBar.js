import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-dark">
            Task Manager
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="text-decoration-none text-dark" to="/addtask">
              Add Task
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-decoration-none text-dark" to="/mytask">
              My Task
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-decoration-none text-dark" to="/donetask">
              Completed Task
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
