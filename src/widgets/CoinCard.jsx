import Coin from "./Coin";
import "./coin-card.css"; // icons for home page below

const CoinCard = ({ icon, title, subtitle, size = 25, children }) => {
    return (
        <div className="coin-card">
            {children ? children : <Coin title={title} subtitle={subtitle} /> }
        </div>
    );
};

export default CoinCard;
