import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: rgb(146,111,247);
    color: white;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1{
    font-size: 36px;
  }
  h2{
    font-size: 24px;
  }
  h3{
    font-size: 18px;
  }
`;

export default globalStyles;
