import * as React from "react";
import CurrencyInputsList from "../components/CurrencyInputsList";
import SwitchButton from "../components/SwitchButton";
import { byn, usd } from "../config/currencies";
import "./CurrencyConverter.css";

interface IState {
  currenciesList: Array<{
    name: string;
    buyFromRate: number;
    sellToRate: number;
  }>;
}

class CurrencyConverter extends React.PureComponent<{}, IState> {
  public state = {
    currenciesList: [usd, byn],
  };
  public render() {
    return (
      <div className="board-container">
        <h4 className="title">Конвертер Валют</h4>
        <div className="converter-container">
          <CurrencyInputsList currenciesList={this.state.currenciesList}/>
          <SwitchButton onClick={this.reverseCurrencies}/>
        </div>
      </div>
    );
  }

  private reverseCurrencies = () => {
    this.setState({
      currenciesList: [...this.state.currenciesList.reverse()],
    })
  }
}

export default CurrencyConverter;
