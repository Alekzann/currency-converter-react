import {Form} from "./Form";
import Container from "./Container/styled.js";
import { ThemeProvider } from "styled-components";
import {theme} from "./styled.js"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
