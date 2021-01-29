import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/future">Future</Link>
      <Link to="/past">Past</Link>
    </div>
  );
};

export default Navigation;
