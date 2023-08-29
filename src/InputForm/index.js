import {useState} from 'react';
import "./style.css";



const InputForm = () => {
    const [amount, setAmount] = useState("");
    
    return (
    <input 
    className="form__amount"
    name="amount"
    type="number"
    min="1"
    value={amount}
    step="any"
    placeholder="Ilość w PLN"
    onChange={({target}) => setAmount(target.value)}
    />
    );
};


export default InputForm;