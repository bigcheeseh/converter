import * as React from 'react';
import './CurrencyInput.css';

interface IProps {
  amount: number | undefined;
  currencyName: string;
  changeAmount: ($: number | undefined) => void;
  operation: { name: string, rate: number };
}

class CurrencyInput extends React.PureComponent<IProps> {
  public render() {
    const { operation, currencyName, amount } = this.props;
    return (
      <div className="input-container">
        <input type="number"
          className="input"
          value={!amount ? undefined : this.convertFromUsd(amount)}
          placeholder={operation.name}
          onChange={this.handleChange}
        />
        <div className="currency-name">
          {currencyName}
        </div>
      </div>
    );
  }

  private convertFromUsd = (amount: number | undefined) => {
    if (!amount) {
      return amount;
    }

    return this.roundTo(amount / this.props.operation.rate);
  }

  private convertToUsd = (amount: number | undefined) => {
    if (!amount) {
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
