import { currencies } from '../currencies.js';

import "./style.css";

const Select = ({ currency, setCurrency }) => (
	<select
		className="select"
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
)


export default Select;