import React from 'react';
import ReactDOM from 'react-dom';

import Card from 'react-bootstrap/Card';

import BigBanner from './components/Jumbotron';
import CardDeck from './components/CardDeck';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import './style.css';

function App() {
  return (
    <div className="body">
      <Navigation />
      <BigBanner
        headerText="Hello!"
        bodyText="This is some test content!"
        bgImage="http://178.128.45.237/img/bg3.jpg"
      />

      <div class="container">
        <Card>
          <Card.Body>
            <h1>React Bootstrap Test</h1>
            <p>This project was created as a test-bed for working with React Bootstrap.</p>
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
      </div>

      <Footer />
    </div>
  );
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
