import "./style.css"

const Form = ({ input, select, result, onFormSubmit }) => (
	<form className="form" onSubmit={onFormSubmit}>
		<fieldset className="form__fieldset">
			<legend className="form__legend">Kantor walut</legend>
			<div className="form__container">
				<span className="form__listHeader">Kwota w PLN*</span>
				{input}
			</div>
			<div className="form__container">
				<span className="form__listHeader">Waluta:</span>
				{select}
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