import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version: 1.0.0</h4>
      <NavLink to={"/"}>Go back</NavLink>
    </div>
  );
};

export default About;
