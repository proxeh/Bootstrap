import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class BigBanner extends React.Component {
  render() {
    var styles = {
      backgroundImage: 'url(' + this.props.bgImage + ')', backgroundAlign: 'center center', backgroundSize: 'cover', textAlign: 'center', color: '#FFF'
    }
    return (
      <Jumbotron style={ styles }>
        <h1>{this.props.headerText}</h1>
        <p>{this.props.bodyText}</p>
      </Jumbotron>
    )
  }
}

export default BigBanner;