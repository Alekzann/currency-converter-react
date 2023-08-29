import InputForm from "./InputForm";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";
import Form from "./Form";
import Container from "./Container";
import Currencies from "./Currencies";
import { useState } from 'react';


function App() {

  const onSelectChange=({target}) => setCurrencies(target.value)
  const [currencies, setCurrencies] = useState(
		[
			{ id: "USD", name: "Dollar Amerykański", rate: 4 },
			{ id: "EUR", name: "EURO", rate: 4.5 },
			{ id: "CZK", name: "Czeska krona", rate: 0.2 },
			{ id: "UAH", name: "Ukrainska hrywnia", rate: 0.11 },
		]
	);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Wysłano opcję select: ${currencies  }`)
  };

  return (
    <Container>
      <Form
        onFormSubmit={onFormSubmit}
        titleInput="Wpisz kwotę do przeliczenia*"
        titleSelect="Wybierz na co chcesz przeliczyć:"
        input={<InputForm />}
        select={<Select 
          currencies={currencies}
          setCurrencies={setCurrencies}
          onSelectChange={onSelectChange}
          />}
        button={<Button />}
        result={<Result />}
      />
    </Container>

  );
}

export default App;
