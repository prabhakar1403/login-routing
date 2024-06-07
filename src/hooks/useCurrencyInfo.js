import { useEffect, useState } from 'react';

function useCurrencyInfo(toCurrency, fromCurrency, date) {
  const [data, setData] = useState(); 

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${fromCurrency}.json`);
        const result = await response.json();
        setData(result[fromCurrency][toCurrency]);
      } catch (error) {
        console.error('Error fetching currency data:', error);
        setData(null);
      }
    };

    fetchCurrencyData(); // Call the async function
  }, [toCurrency, fromCurrency, date]);

  return data;
}

export default useCurrencyInfo;

