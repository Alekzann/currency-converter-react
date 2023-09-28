import { StyleForm, theme, Result, Button, Select, ButtonContainer, Input, ListHeader, Fieldset, Legend, FormContainer } from "./styled.js"
import { currencies } from '../currencies.js';
import CurrentDate from "./CurrentDate";
import { ThemeProvider } from "styled-components"

const Form = ({ amount, setAmount, currency, setCurrency, result, onFormSubmit }) => (
  <ThemeProvider theme={theme}>
    <StyleForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Przelicznik walut
        </Legend>
        <FormContainer>
          <CurrentDate />
          <ListHeader>
            Kwota w PLN*:
          </ListHeader>
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
          <ListHeader>
            Waluta:
          </ListHeader>
          <Select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map(currency => (
              <option
                key={currency.id}
                value={currency.id}>
                {currency.name}
              </option>
            ))
            }
          </Select>
        </FormContainer>
        <ButtonContainer>
          <p>
            <Button>
              Przelicz
            </Button>
          </p>
        </ButtonContainer>
        <Result>
          <p>
            {result !== undefined && (
              <>
                {result.sourceAmount} {"PLN"}
                <strong> {"= "}
                  {result.sourceResult.toFixed(2)} {result.currency}
                </strong>
              </>
            )}
          </p>
        </Result>
      </Fieldset>
    </StyleForm>
  </ThemeProvider>
)


export default Form;