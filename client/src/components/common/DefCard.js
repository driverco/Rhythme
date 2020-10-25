import React from "react";
import { Card, Button, CardHeader, CardBody, CardText, CardImg } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./DefCard.css";

function DefCard(title, content, linkText, linkTo, img, linkExternal) {
  let link;

  function cardRet(title, content, linkText, img) {
    return (
      <Card>
        <CardHeader className="cardHeader">{title}</CardHeader>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardText>{content}</CardText>
          <Button>{linkText}</Button>
        </CardBody>
      </Card>
    );
  }
  if (linkExternal) {
    link = <a id={linkTo} href={linkTo} className="navLink">{cardRet(title, content, linkText, img)}</a>;
  } else {
    link = <NavLink to={linkTo} id={linkTo} className="navLink">{cardRet(title, content, linkText, img)}</NavLink>;
  }
  return (
    <React.Fragment>
      {link}
    </React.Fragment>
  );
}


export default DefCard;