import { useEffect, useState } from "react";
import GlowyButton from "../widgets/GlowyButton";
import CoinCard from "../widgets/CoinCard";
import "./home.css";
import { seperateDigits } from "../tools/index";
import currencyService from "../services/currencyService";
import statusCodes from "../services/statusCodes";
import Coin from "../widgets/Coin";
const Home = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {

        document.body.style.background =
            "url(./img/background.png) center center"; //change the background image for home page
        const searches = JSON.parse(localStorage.getItem("searches")) || [
            "Bitcoin",
            "Ethereum",
            "Dogecoin",
        ];
        (async () => {
            try {
                const last3Searches = searches.length > 3 ? searches.slice(
                    searches.length - 3,
                    searches.length
                ) : [...searches];
                const cs = [];
                for (const s of last3Searches) {
                    const { status, data } = await currencyService.getCoin(
                        s.toLowerCase()
                    );
                    if (status === statusCodes.Successful)
                        cs.push(
                            <Coin
                                title={data.name}
                                subtitle={
                                    seperateDigits(
                                        data.market_data.current_price.usd
                                    ) + "$"
                                }
                                image={data.image.small}
                                customStyle={{ width: "100px" }}
                            />
                        );
                }
                setCoins(cs);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    return (
        <div className="-row-">
            <div className="--col--6">
                <div style={{ margin: 0 }} className="-row-">
                    <h1 className="title pt4">
                        Search &<br /> Buy
                        <span className="text-orange"> Crypto</span>
                    </h1>
                </div>
                <div className="-row-" style={{ marginTop: "-3rem" }}>
                    <p>Shahid Beheshti University</p>
                    <p style={{ margin: "-0.5rem" }} className="pl1">
                        IE Final Project
                    </p>
                </div>

                <div className="-row- pl1 pt4" style={{ marginTop: "-3rem" }}>
                    <GlowyButton
                        backgroundColor="orange"
                        float="left"
                        to="/search"
                    >
                        SEARCH MORE
                    </GlowyButton>
                </div>
            </div>

            <div className="--col--6">
                <div className="-row-" style={{ marginTop: "40rem" }}>
                    { coins && coins.length && coins.map(coin => 
                        <div className="--col--4">
                            <CoinCard>{coin}</CoinCard>
                        </div>
                    )}                    
                </div>
            </div>
        </div>
    );
};

export default Home;
