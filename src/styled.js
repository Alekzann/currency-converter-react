import { createGlobalStyle } from "styled-components";
import background from "./cash.jpg";

export const GlobalStyles = createGlobalStyle`
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

export const theme = {
  colors: {
    primaryColor: "#e5f8fb",
    primaryTextcolor: "#455b65",
  },
};
