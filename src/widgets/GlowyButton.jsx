import { NavLink } from "react-router-dom";
import "./glowy-button.css";

const GlowyButton = ({ to = "/", float = "left", backgroundColor="transparent", children }) => {
    return (
        <div className="--col--12">
            <NavLink
                className="glowy-button"
                style={{float, backgroundColor}}
                to={to}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default GlowyButton;
