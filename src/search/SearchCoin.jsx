import "./search.css";
import { useEffect, useState } from "react";
import InputBox from "../widgets/InputBox";
import Table from "../widgets/Table";
import currencyService from "../services/currencyService";
import statusCodes from "../services/statusCodes";
import Coin from "../widgets/Coin";
import { seperateDigits } from "../tools";
const SearchCoin = () => {
    const [search, setSearch] = useState("");
    const [coins, setCoins] = useState([]);

    const getCurrency = async (coin) => {
        try {
            const { status, data } = await currencyService.getCoin(
                coin.toLowerCase()
            );
            if (status === statusCodes.Successful) {
                console.log(data);
                if (data instanceof Array) {
                    const cs = data.map((c) => [
                        <Coin
                            title={c.symbol.toUpperCase()}
                            subtitle={c.name}
                            image={c.image.small}
                            customStyle={{ width: "100px" }}
                            name={c.name}
                        />,
                        seperateDigits(c.market_data.current_price.usd) + "$",
                        seperateDigits(c.market_data.price_change_percentage_24h_in_currency.usd) + "%",
                        seperateDigits(c.market_data.market_cap.usd) + "$",
                    ]);
                    setCoins(cs);
                } else {
                    setCoins([
                        [
                            <Coin
                                title={data.symbol.toUpperCase()}
                                subtitle={data.name}
                                image={data.image.small}
                                customStyle={{ width: "100px" }}
                            />,
                            seperateDigits(data.market_data.current_price.usd) + "$",
                            seperateDigits(data.market_data.price_change_percentage_24h_in_currency.usd) + "%",
                            seperateDigits(data.market_data.market_cap.usd) + "$",
                        ],
                    ]);
                    const searches = JSON.parse(localStorage.getItem('searches')) || [];
                    searches.push(data.name);
                    localStorage.setItem('searches', JSON.stringify(searches))
                    console.log(data.usd)
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        document.body.style.background = "black";

    }, []);

    useEffect(() => {
        getCurrency(search);
    }, [search]);
    return (
        <div className="-row-">
            <div className="-row- banner"></div>
            <div className="search-body">
                <div className="-row- text-center">
                    <h1>Cryptocurrency Prices by Market Cap</h1>
                </div>
                <div className="-row-">
                    <InputBox
                        onChange={(e) => setSearch(e.target.value)}
                        hint="Search For a Crypto Currency..."
                    />
                </div>
                <div className="-row-">
                    <Table
                        headers={["Coin", "Price", "24h Change", "Market Cap"]}
                        rows={coins}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchCoin;
