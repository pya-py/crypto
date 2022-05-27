import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import SearchCoin from "../search/SearchCoin";
import AppLayout from "./AppLayout";
import SingleCoin from '../single-coin/SingleCoin';

const AppRouter = () => {
    return (
        <AppLayout>
            <Switch>
                <Route path="/coins/:path">
                    <SingleCoin />
                </Route>
                <Route path="/search">
                    <SearchCoin />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </AppLayout>
    );
};
export default AppRouter;
