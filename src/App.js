import InputForm from "./InputForm";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";
import Form from "./Form";
import Container from "./Container";
import { currencies } from './currencies.js';
import { useState } from 'react';


function App() {
  const [currency, setCurrency] = useState(currencies[0].id);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ id }) => id === currency).rate;

    setResult({
      sourceAmount: +amount,
      sourceResult: amount/rate,
      currency,
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <Container>
      <Form
        onFormSubmit={onFormSubmit}
        titleInput="Kwota w PLN*"
        titleSelect="Waluta:"
        input={
          <InputForm
            amount={amount}
            setAmount={setAmount}
          />}
        select={
          <Select
            currency={currency}
            setCurrency={setCurrency}
          />}
        button={
          <Button
          />}
        result={
          <Result
          result={result}
          />}
      />
    </Container>
  );
}

export default App;
