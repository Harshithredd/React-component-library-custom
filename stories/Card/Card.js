import PropTypes from "prop-types";
import { options } from "./constants";
import './Card.css'
import React from "react";

const Card = ({
  children = "hi Im a children",
  color = "primary",
  size = "sm",
  ...rest
}) => {
  return <div className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
};
export default Card;
