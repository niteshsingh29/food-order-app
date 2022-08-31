import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = ({ admin, customer, totalRestaurant, totalOrder }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto text-danger">
            <Nav.Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "red" }}
              >
                {admin || customer ? "Logout" : "Login"}
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                to="/allRestaurant"
                style={{ textDecoration: "none", color: "red" }}
              >
                {admin || customer ? "Total Restaurant" : ""}
                <span className="badge badge-pill badge-danger">
                  {admin || customer ? totalRestaurant.length : ""}
                </span>
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                to="/totalOrder"
                style={{ textDecoration: "none", color: "red" }}
              >
                {admin ? "Total Order's" : "Your Order"}
                <span className="badge badge-pill badge-danger">
                  {admin || customer ? totalOrder.length : ""}
                </span>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
