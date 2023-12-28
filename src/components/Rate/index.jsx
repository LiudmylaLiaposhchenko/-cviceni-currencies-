import { useEffect, useState } from 'react';
import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

export const Rate = ({ from }) => {
  const [rate, setRate] = useState(0);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${from}&to=CZK`,
      );
      const data = await response.json();
      setRate(data.rates.CZK);
    })();
  }, [from]);
  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate}</div>
    </div>
  );
};
