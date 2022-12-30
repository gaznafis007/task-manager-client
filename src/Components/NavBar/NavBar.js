import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = () => {
  const { user, load, logOut } = useContext(AuthContext);
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
        <Nav className="justify-content-end">
          {user?.uid ? (
            <Nav.Link>
              <Button onClick={logOut} className="btn">
                Sign out
              </Button>
            </Nav.Link>
          ) : (
            <>
              <Nav.Link>
                <Link to="/signup" className="btn btn-outline-primary">
                  Sign up
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/login" className="btn btn-outline-primary">
                  Login
                </Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
