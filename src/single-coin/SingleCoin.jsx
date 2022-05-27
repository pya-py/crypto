import { useEffect, useState } from "react";
import currencyService from "../services/currencyService";
import statusCodes from "../services/statusCodes";
import { seperateDigits } from "../tools";
import { useLocation } from "react-router";
const SingleCoin = () => {
    const [coin, setCoin] = useState(null);
    const [coinName, setCoinName] = useState(null);

    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        const pth = pathname.split("/");
        setCoinName(pth[pth.length - 1]);
        const current = pth[pth.length - 1];
    }, [pathname]);
    useEffect(() => {
        document.body.style.background = "black"; //change the background image for home page
        console.log(coinName);
        if (coinName)
            (async () => {
                try {
                    let cs = null;
                    const { status, data } = await currencyService.getCoin(
                        coinName.toLowerCase()
                    );
                    if (status === statusCodes.Successful)
                        cs = {
                            title: data.name,
                            subtitle:
                                seperateDigits(
                                    data.market_data.current_price.usd
                                ) + "$",
                            image: data.image.large,
                            rank: data.market_data.market_cap_rank,
                            price: data.market_data.curren_price,
                            marketCap: data.market_data.market_cap.usd
                        };
                    setCoin(cs);
                    console.log(cs);
                } catch (e) {
                    console.log(e);
                }
            })();
    }, [coinName]);
    return (
        <div className="-row- text-center">
            {coin && (
                <div>
                    <div className="-row-">
                        <img src={coin.image} alt="error" />
                    </div>
                    <div style={{marginLeft: '40%'}} className="-row- text-center title">
                        {coin.title}
                    </div>
                    <br />
                    <div style={{marginLeft: '45%', fontSize: '35px'}} className="-row- text-center title">
                        <b>Rank: </b> {coin.rank}
                    </div>
                    <div style={{marginLeft: '40%', fontSize: '35px'}} className="-row- text-center title">
                        <b>Current Price: </b> {coin.price && seperateDigits(coin.price)}
                    </div>
                    <div style={{marginLeft: '40%', fontSize: '35px'}} className="-row- text-center title">
                        <b>Market Cap: </b> {coin.marketCap && seperateDigits(coin.marketCap)}
                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default SingleCoin;
