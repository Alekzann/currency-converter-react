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
  margin-bottom: 50px;
};
`;

export const theme = {
  colors: {
    primaryColor: "#e5f8fb",
    primaryTextcolor: "#595858",
    frameColor: "rgb(36, 209, 209)"
  },
  breakpoints: {
    mobileMax: 560,
  },
};
