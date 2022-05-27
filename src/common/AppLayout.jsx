import AppRouter from "./AppRouter";
import Nav from "./Nav";

const AppLayout = ({children}) => {
    return (
        <div className="-row-">
            <div className="-row-">
                <Nav />
            </div>
            <div className="-row-">
                {children}
            </div>
        </div>
    );
};

export default AppLayout;
