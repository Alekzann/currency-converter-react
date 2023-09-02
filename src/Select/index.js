import { currencies } from '../currencies.js';
import { useState } from 'react';
import "./style.css";

const Select = () => {
	const [currency, setCurrency] = useState(currencies[0]);

	return (
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
}

export default Select;