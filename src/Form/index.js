import "./style.css";
import { currencies } from '../currencies.js';

const Form = ({ amount, setAmount, currency, setCurrency, result, onFormSubmit }) => (
  <form className="form" onSubmit={onFormSubmit}>
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kantor walut</legend>
      <div className="form__container">
        <span className="form__listHeader">Kwota w PLN*</span>
        <input
          className="form__input"
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
      </div>
      <div className="form__container">
        <span className="form__listHeader">Waluta:</span>
        <select
          className="form__select"
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
        </select>
      </div>
      <p>
        <button className="form__button">
          Przelicz
        </button>
      </p>
      <div >
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
      </div>
    </fieldset>
  </form>
)


export default Form;