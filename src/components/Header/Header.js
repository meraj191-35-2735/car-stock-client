import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar bg="white">
        <Container className="d-flex justify-content-between">
          <div>
            <Nav className="me-auto">
              <Nav.Link className="nav-links  fw-bold" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-links fw-bold" as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
          </div>
          <div>
            {user ? (
              <div className="d-flex">
                <Nav.Link
                  className="nav-links mx-2 mt-auto"
                  as={Link}
                  to="/manage_inventory"
                >
                  Manage Items
                </Nav.Link>
                <Nav.Link
                  className="nav-links mx-2 mt-auto"
                  as={Link}
                  to="/add_product"
                >
                  Add Product
                </Nav.Link>
                <button
                  className="btn btn-link pt-1 text-dark text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
