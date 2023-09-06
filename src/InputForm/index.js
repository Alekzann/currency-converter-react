import "./style.css";

const InputForm = ({ amount, setAmount }) => (
	<input
		className="input"
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
);


export default InputForm;