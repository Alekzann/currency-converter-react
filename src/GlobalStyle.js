import { createGlobalStyle } from "styled-components";
import background from "./cash.jpg";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
};

*,
::after,
::before {
  box-sizing: inherit;
};

body {
  color: rgb(54, 42, 63);
  font-family: 'Noto Sans Nag Mundari', sans-serif;
  background-image: url("${background}");
	background-size: cover;
	background-repeat: no-repeat;
};
`;

export default GlobalStyle;