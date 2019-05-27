
const USD_RATE = 1;

const usd = {
    buyFromRate: USD_RATE, 
    name: "USD",
    sellToRate: USD_RATE,
}

const byn = {
    buyFromRate: 0.49 * USD_RATE, 
    name: "BYN",
    sellToRate: 0.47 * USD_RATE,
}

export const getCurrencies = () => [usd, byn];