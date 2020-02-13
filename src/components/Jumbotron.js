import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

class BigBanner extends React.Component {
  render() {
    var styles = {
      backgroundImage: "url(" + this.props.bgImage + ")",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      textAlign: "center",
      color: "#FFF"
    };
    return (
      <Jumbotron style={styles}>
        <div className="jumbotron-textcontainer">
          <h1>{this.props.headerText}</h1>
          <p>
						<p className="d-none d-lg-block">{this.props.bodyText}</p>
            <Button primary className="d-lg-none">
              <Link
                activeClass="active"
                to="maincontent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {this.props.buttonText}
              </Link>
            </Button>
          </p>
        </div>
      </Jumbotron>
    );
  }
}

export default BigBanner;
