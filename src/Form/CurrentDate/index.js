import { DateStyle } from "./styled.js";
import {useCurrentDate} from "./useCurrentDate.js";

const formattedDate = (currentDate) => currentDate.toLocaleDateString("pl", options);

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

const CurrentDate = () => {
  const date = useCurrentDate();
  
  return (
    <DateStyle>
      <p>
        Dziś jest: 
        {" "}
        {formattedDate(date)}
        </p>
    </DateStyle>
  );
};

export default CurrentDate;