// import { useState, useEffect } from "react";
import axios from "axios";

axios
  .get(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_P1pYmdV11fvj0mAT7NTqT0wpDnsSaolNjUowOHkI&base_currency=PLN"
  )
  .then((response) => console.log(response.data));
