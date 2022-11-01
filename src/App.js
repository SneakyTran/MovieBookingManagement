import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/HeaderComponent/HeaderRFC";
import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/home" component={Home}></Route>

                {/* default url */}
                <Route exact path="/" component={Home}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
