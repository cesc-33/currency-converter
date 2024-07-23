import React from 'react';
import CurrencyConverter from './components/CurrencyConverter'; //components hierarchy
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Währungsrechner</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;