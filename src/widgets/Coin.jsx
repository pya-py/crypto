import { useHistory } from "react-router";
export default function Coin({ title, subtitle, image, customStyle, name }) {
    const history = useHistory();

    return (
        <div style={customStyle ? {...customStyle, cursor: 'pointer'} : null} className="row" onClick={ name ?
            () => {
                history.push("/coins/" + name)
            } : null
        }>
            <div className="--col--5">
                {image && <img src={image} alt="error" /> }
            </div>
            <div className="--col--7">
                <div className="-row-">{title}</div>
                <div className="-row- text-orange pt1">{subtitle}</div>
            </div>
        </div>
    );
}
