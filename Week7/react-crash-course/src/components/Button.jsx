import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button className="btn" onClick={onClick} style={{ background: color }}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "Add Task",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
