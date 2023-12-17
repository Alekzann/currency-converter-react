import { useState, useEffect } from "react";
import axios from "axios";

const url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_P1pYmdV11fvj0mAT7NTqT0wpDnsSaolNjUowOHkI&base_currency=PLN";

export const useCurrencyData = () => {
  const [currencyData, setCurrencyData] = useState({
    status: "loading",
    ratesData: [],
  });

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(url);

          setCurrencyData({
            status: "success",
            ratesData: response.data.data,
            date: response.data.meta.last_updated_at,
          });
        } catch {
          setCurrencyData({
            status: "error",
          });
        }
      })();
    }, 700);
  }, []);

  return { currencyData };
};
