import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" fixed="bottom">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="http://178.128.45.237/img/favicon.png"
              width="32"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
