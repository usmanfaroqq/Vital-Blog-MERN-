import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { ImSearch } from "react-icons/im";
<<<<<<< HEAD
=======
import {Link} from 'react-router-dom';
>>>>>>> 3e7cfe9 (ok)

const LowerNavbar = () => {
  return (
    <div className="shadow-sm  mb-5 rounded">
        <Container className="lower__navbar ">
        <Navbar  expand="lg" >
<<<<<<< HEAD
        <Nav.Link to="#" className="lower__navbar-text" active>Home</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="gap-5">
            <Nav.Link to="#home" className="lower__navbar-text " >News Feed</Nav.Link>
            <Nav.Link to="#features" className="lower__navbar-text">News</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Business</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Magazine</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Sport</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Arts</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Culture</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Politics</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Style</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Travel</Nav.Link>
=======
        <Nav> <Link to="/" className="lower__navbar-text gap-3" active>Home</Link> </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="gap-5">
            <Nav><Link to="/login" className="lower__navbar-text newsFeed" > News Feed</Link></Nav>
            <Nav><Link to="#features" className="lower__navbar-text">News</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Business</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Magazine</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Sport</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Arts</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Culture</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Politics</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Style</Link></Nav>
            <Nav><Link to="#pricing" className="lower__navbar-text">Travel</Link></Nav>
>>>>>>> 3e7cfe9 (ok)
            </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" className="lower__navbar-button"> <ImSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        </Container>
    </div>
  );
};

export default LowerNavbar;
