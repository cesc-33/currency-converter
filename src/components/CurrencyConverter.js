import React, { useState, useEffect } from 'react';
import CurrencyFields from './CurrencyFields';
import ExchangeRateDisplay from './ExchangeRateDisplay';

const CurrencyCalculator = () => {
    const [exchangeRates, setExchangeRates] = useState({}); // Speichert die abgerufenen Wechselkurse.
    const [sourceCurrency, setSourceCurrency] = useState('USD'); // Ausgangswährung, die umgerechnet werden soll.
    const [targetCurrency, setTargetCurrency] = useState('EUR'); // Zielwährung, in die umgerechnet werden soll.
    const [sourceAmount, setSourceAmount] = useState(1); // Betrag der Ausgangswährung.
    const [convertedAmount, setConvertedAmount] = useState(0); // Umgerechneter Betrag in der Zielwährung.
    const [currentExchangeRate, setCurrentExchangeRate] = useState(1); // Aktueller Wechselkurs zwischen Ausgangs- und Zielwährung.

    // Daten von der API abrufen und Wechselkurse setzen.
    useEffect(() => {
        fetch('https://openexchangerates.org/api/latest.json?app_id=62de808553784edf841466564b41e338')
            .then(response => response.json())
            .then(data => setExchangeRates(data.rates))
            .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
    }, []);

    // Wechselkurs berechnen und umgerechneten Betrag aktualisieren.
    useEffect(() => {
        if (exchangeRates[sourceCurrency] && exchangeRates[targetCurrency]) {
            const newExchangeRate = exchangeRates[targetCurrency] / exchangeRates[sourceCurrency];
            setCurrentExchangeRate(newExchangeRate);
            setConvertedAmount(sourceAmount * newExchangeRate);
        }
    }, [exchangeRates, sourceCurrency, targetCurrency, sourceAmount]);

    // Betrag der Ausgangswährung ändern und umgerechneten Betrag aktualisieren.
    const handleSourceAmountChange = (newAmount) => {
        setSourceAmount(newAmount);
        if (exchangeRates[sourceCurrency] && exchangeRates[targetCurrency]) {
            const newExchangeRate = exchangeRates[targetCurrency] / exchangeRates[sourceCurrency];
            setConvertedAmount(newAmount * newExchangeRate);
        }
    };

    // Betrag der Zielwährung ändern und Ausgangsbetrag aktualisieren.
    const handleDestinationAmountChange = (newAmount) => {
        setConvertedAmount(newAmount);
        if (exchangeRates[sourceCurrency] && exchangeRates[targetCurrency]) {
            const newExchangeRate = exchangeRates[sourceCurrency] / exchangeRates[targetCurrency];
            setSourceAmount(newAmount * newExchangeRate);
        }
    };

    return (
        <div>
            <CurrencyFields
                currency={sourceCurrency}
                setCurrency={setSourceCurrency}
                amount={sourceAmount}
                setAmount={handleSourceAmountChange}
                rates={exchangeRates}
            />
            <ExchangeRateDisplay
                baseCurrency={sourceCurrency}
                targetCurrency={targetCurrency}
                convertedAmount={convertedAmount}
                rate={currentExchangeRate}
            />
            <CurrencyFields
                currency={targetCurrency}
                setCurrency={setTargetCurrency}
                amount={convertedAmount}
                setAmount={handleDestinationAmountChange}
                rates={exchangeRates}
                disabled={false}
            />
        </div>
    );
};

export default CurrencyCalculator;
