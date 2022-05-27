import http from "./httpService";
const currencyService = {
    getCoin: (coin = "bitcoin") =>
        http.get(
            `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`,
            JSON.stringify({
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 100,
                page: 1,
                sparkline: false,
                price_change_percentage: "24h",
            })
        ),
};

export default currencyService;
