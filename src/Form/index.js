import "./style.css"

const Form = ({titleInput, titleSelect, input, select, button, result, onFormSubmit}) => (
    <form className="form " onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kantor walut</legend>
            <div>
                <span className="form__listHeader">{titleInput}</span>
                {input}
            </div>
            <div>
                <span className="form__listHeader">{titleSelect}</span>
                {select}
            </div>
            {button}
            {result}
        </fieldset>
    </form>
)


export default Form;