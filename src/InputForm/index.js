import "./style.css";



const InputForm = () => (
    <input 
    className="form__amount"
    name="amount"
    type="number"
    min="1"
    value="1"
    step="any"
    required />
    
);


export default InputForm;