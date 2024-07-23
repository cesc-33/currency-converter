import React from 'react';

const ExchangeRateDisplay = ({ baseCurrency = "USD", rate = 1, targetCurrency = "EUR", convertedAmount }) => {
    return (
        <div>
            <h2>{`${convertedAmount.toFixed(2)} ${targetCurrency}`}</h2>
            <p>{`Exchange rate: 1 ${baseCurrency} = ${rate.toFixed()} ${targetCurrency}`}</p>
        </div>
    );
};

export default ExchangeRateDisplay;
