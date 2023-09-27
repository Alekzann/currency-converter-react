import {DateStyle} from "./styled.js";
import { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalID)
    };
  }, []);

  const formattedDate = currentDate.toLocaleDateString("pl", options);

  return (
    <DateStyle>
      <p>{`Dziś jest: ${formattedDate}`}</p>
    </DateStyle>
  );
};

export default CurrentDate;