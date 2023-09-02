import InputForm from "./InputForm";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";
import Form from "./Form";
import Container from "./Container";
//import { currencies } from './currencies.js';



function App() {

  



  const onFormSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Container>
      <Form
        onFormSubmit={onFormSubmit}
        titleInput="Wpisz kwotę do przeliczenia*"
        titleSelect="Wybierz na co chcesz przeliczyć:"
        input={
          <InputForm
          />}
        select={
          <Select
            />}
        button={
          <Button
          />}
        result={
          <Result
          />}
      />
    </Container>
  );
}

export default App;
