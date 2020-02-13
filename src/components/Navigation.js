import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './css/Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <div className="container">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="http://178.128.45.237/img/favicon.png"
              width="32"
              className="d-inline-block align-top"
            />{' '}
            Jamie Shaw
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#maincontent">About The Project</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Link 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another Link</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;
