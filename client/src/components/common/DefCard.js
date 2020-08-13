import React, { Component } from "react";
import { Card, Button, CardHeader, CardBody, CardText, CardImg } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./DefCard.css";

class DefCard extends Component {
  render() {
    let link;
    if (this.props.linkExternal) {
      link = <a target="_blank" id={this.props.linkTo} href={this.props.linkTo} className="navLink">{CardRet(this.props)}</a>;
    } else {
      link = <NavLink to={this.props.linkTo} id={this.props.linkTo} className="navLink">{CardRet(this.props)}</NavLink>;
    }
    function CardRet(props) {
      return (
        <Card>
          <CardHeader className="cardHeader">{props.title}</CardHeader>
          <CardImg top width="100%" src={props.img} alt="Card image cap" />
          <CardBody>
            <CardText>{props.content}</CardText>
            <Button>{props.linkText}</Button>
          </CardBody>
        </Card>
      );
    }

    return (
      <React.Fragment>
        {link}
      </React.Fragment>
    );
  }
}

DefCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkExternal: PropTypes.bool
};

export default DefCard;