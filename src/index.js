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
          <Card.Body>This website is a test of ReactBootstrap.</Card.Body>
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
