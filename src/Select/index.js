import { useState } from 'react';



const Select = ({currencies, onSelectChange}) => {
	
	
	return (
		<select value={currencies} onChange={onSelectChange}>
				{currencies.map(currency => (
					<option key={currency.id}>
						{currency.name}
					</option>
				))
				}
		</select>
	)
}

export default Select;