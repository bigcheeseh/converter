import * as React from 'react';
import './CurrencyInput.css';

type Amount = string | number;

interface IProps {
  amount: Amount;
  currencyName: string;
  changeAmount: (amount: Amount) => void;
  operation: { name: string, rate: number };
}

class CurrencyInput extends React.PureComponent<IProps> {
  public render() {
    const { operation, currencyName, amount } = this.props;
    return (
      <div className="input-container">
        <input type="number"
          className="input"
          value={this.convertFromUsd(amount)}
          placeholder={operation.name}
          onChange={this.handleChange}
        />
        <div className="currency-name">
          {currencyName}
        </div>
      </div>
    );
  }

  private convertFromUsd = (amount: Amount) => {
    if (!amount || typeof amount !== "number") {
      return amount;
    }

    return this.roundTo(amount / this.props.operation.rate);
  }

  private convertToUsd = (amount: Amount) => {
    if (!amount || typeof amount !== "number") {
      return amount;
    }
    return this.roundTo(amount * this.props.operation.rate);
  }

  private roundTo = (amount: number) => {
    return Math.abs(Math.round(amount * 100) / 100);
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const usdAmount = this.convertToUsd(
      Number(value)
    );
    return this.props.changeAmount(usdAmount)
  }
}

export default CurrencyInput;
