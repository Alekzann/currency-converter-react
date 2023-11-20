import { StyleResult } from "./styled.js";

export const Result = ({ result }) => (
  <StyleResult>
    <p>
      {result !== undefined && (
        <>
          {result.sourceAmount} {"PLN"}
          <strong>
            {" "}
            {"= "}
            {result.sourceResult.toFixed(2)} {result.currency}
          </strong>
        </>
      )}
    </p>
  </StyleResult>
);
