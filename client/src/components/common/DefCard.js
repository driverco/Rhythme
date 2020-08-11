import React, { Component } from "react";
import { Card, Button, CardHeader, CardBody, CardText, CardImg } from "reactstrap";
import PropTypes from "prop-types";
import "./DefCard.css";

class DefCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader className="cardHeader">{this.props.title}</CardHeader>
        <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
        <CardBody>
          <CardText>{this.props.content}</CardText>
          <Button>{this.props.linkText}</Button>
        </CardBody>
      </Card>
    );
  }
}

DefCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default DefCard;