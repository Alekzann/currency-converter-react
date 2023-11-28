import { useState, useEffect } from "react";
import axios from "axios";

//const url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_P1pYmdV11fvj0mAT7NTqT0wpDnsSaolNjUowOHkI&base_currency=PLN";

export const useCurrencyData = () => {
  const [currencyData, setCurrencyData] = useState({
    status: "loading",
  });

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get("currencies.json");

          setCurrencyData({
            status: "success",
            data: response.data,
            currencies: response.data.rates,
            apiDate: response.data.time_last_update_utc,
          });
        } catch {
          setCurrencyData({
            status: "error",
            data: null,
          });
        }
      })();
    }, 2000);
  });

return {currencyData};
};
