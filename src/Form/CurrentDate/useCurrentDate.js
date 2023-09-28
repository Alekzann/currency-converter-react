import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        };
    }, []);
    return currentDate;
}



 