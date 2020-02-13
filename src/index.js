import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Container } from 'react-bootstrap';

import BigBanner from './components/Jumbotron';
import CardDeck from './components/CardDeck';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';

import './style.css';

function App() {
  return (
    <div className="body">
      <Navigation />
      <BigBanner
        headerText="Welcome to my project!"
        bodyText="Learn more below!"
        buttonText="Learn More"
        bgImage="http://178.128.45.237/img/bg3.jpg"
      />

      <div className="container" id="maincontent">
        <Card>
          <Card.Body>
            <h2>React Bootstrap Test</h2>
            <p>This project was created as a sandbox for working with React Bootstrap.</p>
            <hr />
            <h3>About this project</h3>
            <p>
              The purpose of this project was to familiarise myself with the React Bootstrap framework, and how to create a website using it.<br />
              You can view the source for this app here: <a href="https://github.com/proxeh/Bootstrap" target="_blank">https://github.com/proxeh/Bootstrap</a>
            </p>
          </Card.Body>
        </Card>
        <br />
        <CardDeck />
        <br /><br />
      </div>
      <Container fluid className="container-dark container-angled">
        <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut eros lectus. Nullam rutrum sollicitudin diam, id volutpat justo vestibulum at. Quisque sed dui malesuada, feugiat lorem et, dignissim sem. Aliquam ultrices quam non magna egestas mollis. Nam semper pharetra magna, suscipit hendrerit magna pulvinar ut. Ut augue erat, aliquam ut eros eu, bibendum ullamcorper ipsum. Duis fringilla ligula erat, at viverra massa suscipit id. Sed condimentum eu augue id condimentum. Maecenas rutrum dapibus vehicula. Nullam ut aliquet lectus, vel suscipit ipsum. Nullam in libero eu magna faucibus elementum. Nulla et ipsum vitae justo consectetur interdum. Cras sed dui posuere, lobortis ante vel, elementum diam.
        </Container>
      </Container>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Get in touch!</Card.Title>
            <Card.Text>
              This won't actually send me an email, it's just a quick form example.
            </Card.Text>
            <hr />
            <ContactForm />
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </div>
  );
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
