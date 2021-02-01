import React from "react";
import { Link } from "react-router-dom";
import {
  IoPlanetOutline,
  IoPlayBackOutline,
  IoPlayForwardOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/past" className="Link">
        <IoPlayBackOutline />
      </Link>
      <Link to="/" className="Link">
        <IoPlanetOutline />
      </Link>
      <Link to="/future" className="Link">
        <IoPlayForwardOutline />
      </Link>
      <Link to="/" className="Link">
        <IoPersonCircleOutline />
      </Link>
    </div>
  );
};

export default Navigation;
