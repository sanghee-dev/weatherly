import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  IoPlanetOutline,
  IoPlayBackOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";

const HEADER = styled.header`
  width: 100%;
  height: cal(1rem + 20px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px;
  border: 1px solid white;
  border-radius: 40px;
`;
const LINK = styled(Link)`
  color: ${(props) => (props.current ? "yellow" : "white")};
  transition: all 0.2s ease-in-out;
  &:hover {
    text-shadow: 1px 1px 6px rgba(255, 255, 0, 0.5);
  }
  font-weight: 600;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <HEADER>
      <LINK to="/past" current={pathname === "/past"}>
        <IoPlayBackOutline />
      </LINK>
      <LINK to="/" current={pathname === "/"}>
        <IoPlanetOutline />
      </LINK>
      <LINK to="/future" current={pathname === "/future"}>
        <IoPlayForwardOutline />
      </LINK>
    </HEADER>
  );
};

export default withRouter(Header);
