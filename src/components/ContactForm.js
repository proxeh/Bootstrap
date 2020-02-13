import React from 'react';

import { Button, Col, Form, InputGroup } from 'react-bootstrap';

class ContactForm extends React.Component {
  
  render() {

    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Your Email Address</Form.Label>
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="you@youremail.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Email address
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="comments">
          <Form.Label>Your comments</Form.Label>
          <Form.Control 
            as="textarea" 
            rows="3" 
            placeholder="Enter your comments here. Keep it clean!" 
          />
        </Form.Group>
        <Form.Group controlId="submit">
          <Form.Label> </Form.Label>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>        
      </Form>
    );
  }
}

export default ContactForm;