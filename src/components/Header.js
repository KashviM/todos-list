import React from 'react'
import { Navbar, Nav , Container, Form, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default function Header(props) {
  let formstyle={
    position:"relative",
    left: 340,
    text_align: "center"   
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{formstyle}}
              navbarScroll
              
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About US</Nav.Link>

            </Nav>
            {props.searchbar?<Form className="d-flex" style={formstyle}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={formstyle}
              />
              <Button variant="outline-success"style={formstyle}>Search</Button>
            </Form>:" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

Header.defaultProps={
  title: "your title",
  searchbar: false
}

Header.propTypes={
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired

}