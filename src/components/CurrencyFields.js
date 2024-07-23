import React from 'react';

function CurrencyFields({ currency, setCurrency, amount = 0, setAmount, rates, disabled = false }) {
    return (
        <div>
            <input
                type="number"
                value={amount.toFixed(4)}
                onChange={e => setAmount(parseFloat(e.target.value) || 0)}
                disabled={disabled}
            />
            <select value={currency} onChange={e => setCurrency(e.target.value)} disabled={disabled}>
                {Object.keys(rates).map(rate => (
                    <option key={rate} value={rate}>{rate}</option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyFields;
