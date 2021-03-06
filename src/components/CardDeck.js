import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

class Cards extends React.Component {
  render() {
    return (
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/345x160.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="#0" title="Learn More">Learn More</a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/345x160.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="#0" title="Learn More">Learn More</a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/345x160.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="#0" title="Learn More">Learn More</a>
          </Card.Footer>
        </Card>
      </CardDeck>
    );
  }
}

export default Cards;