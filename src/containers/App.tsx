import * as React from 'react';
import './App.css';
import CurrencyConverter from './CurrencyConverter'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
