import {
  StyleForm,
  Button,
  Input,
  Select,
  Loading,
  Error,
  ButtonContainer,
  ListHeader,
  Fieldset,
  Legend,
  FormContainer,
} from "./styled";
// import { currencies } from "./currencies";
import CurrentDate from "./CurrentDate";
import { Result } from "./Result";
import { useState } from "react";
import { useCurrencyData } from "./useCurrencyData";

export const Form = () => {
  const { currencyData } = useCurrencyData();

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = () => {
    const rate = currencyData.ratesData[currency].value;

    setResult({
      sourceAmount: +amount,
      sourceResult: amount * rate,
      currency,
      rate,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    calculateResult();
  };

  return (
    <StyleForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>

        <CurrentDate />
        {currencyData.status === "loading" ? (
          <Loading>
            Momencik 🕰️ <br /> ładuje się aktualny kurs walut z{" "}
            <i>currencyapi.com</i>
          </Loading>
        ) : currencyData.status === "error" ? (
          <Error>
            Przykro nam, coś poszło nie tak, <br /> nasze developerzy już
            pracują nad tym... <br /> Spróbuj póżniej🥲
          </Error>
        ) : (
          <>
            <FormContainer>
              <ListHeader>Kwota w PLN*:</ListHeader>
              <Input
                name="amount"
                type="number"
                min="1"
                max="999999999"
                value={amount}
                step="any"
                required
                placeholder="Ilość w PLN"
                onChange={({ target }) => setAmount(target.value)}
              />
            </FormContainer>
            <FormContainer>
              <ListHeader>Waluta:</ListHeader>
              <Select
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(currencyData.ratesData).map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </Select>
            </FormContainer>
          </>
        )}
        <ButtonContainer>
          <p>
            <Button>Przelicz</Button>
          </p>
        </ButtonContainer>
        <Result result={result} />
      </Fieldset>
    </StyleForm>
  );
};
