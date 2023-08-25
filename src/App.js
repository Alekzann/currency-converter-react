import InputForm from "./InputForm";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";
import Form from "./Form";
import Container from "./Container";

function App() {
  return (
    <body>
      <Container>
        <Form 
        titleInput = "Wpisz kwotę do przeliczenia*"
        titleSelect = "Wybierz na co chcesz przeliczyć:"
        input = {<InputForm />}
        select = {<Select />}
        button = { <Button />}
        result = {<Result />}
        />
        </Container>
    </body>
  );
}

export default App;
