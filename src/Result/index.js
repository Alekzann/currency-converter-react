import "./style.css"

const Result = ({ result }) => (
	<p className="result">
		{result !== undefined && (
			<>
				{result.sourceAmount} {"PLN"}
				<strong> {"= "}
					{result.sourceResult.toFixed(2)} {result.currency}
				</strong>
			</>
		)}
	</p>
)

export default Result;