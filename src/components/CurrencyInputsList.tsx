import * as React from "react";
import CurrencyInput from "./CurrencyInput";
import "./CurrencyInputsList.css";

interface IProps {
    currenciesList: Array<{
        name: string;
        buyFromRate: number;
        sellToRate: number;
    }>;
}

interface IState {
    amount: number | undefined,
}

class CurrencyInputsList extends React.PureComponent<IProps, IState> {
    public state = {
        amount: undefined,
    };
    public render() {
        return (
            <div className="inputs-container">
                {this.renderCurrenciesInputsList()}
            </div>
        );
    }

    private changeAmount = (amount: number | undefined) => {
        this.setState({
            amount,
        })
    }

    private renderCurrenciesInputsList = () =>
        this.props.currenciesList.map(
            (currency, index) => {
                const getCurrentOperation = () => {
                    const sellOperation = {
                        name: "Продажа банку",
                        rate: currency.sellToRate,
                    }
                    const buyOperation = {
                        name: "Покупка у банка",
                        rate: currency.buyFromRate,
                    };
                    if (index === 0) {
                        return sellOperation;
                    }
                    return buyOperation;
                }
                return (
                    <CurrencyInput
                        amount={this.state.amount}
                        key={currency.name}
                        currencyName={currency.name}
                        changeAmount={this.changeAmount}
                        operation={getCurrentOperation()}
                    />
                );
            }
        )
}

export default CurrencyInputsList;
