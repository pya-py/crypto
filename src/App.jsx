import { BrowserRouter } from "react-router-dom";
import AppRouter from './common/AppRouter';
function App() {
    return (
        <BrowserRouter>
            <div className="-row-">
                
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
