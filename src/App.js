import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import BannerComponent from "./components/BannerComponent/BannerComponent";
import Header from "./components/HeaderComponent/HeaderRFC";
import Home from "./pages/Home/Home";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/home" component={Home}></Route>

          {/* default url khi push nhánh nhớ đưa file vào Home*/}
          {/* <Route exact path="/" component={Home}></Route> */}
          <Route exact path="/" component={BannerComponent}></Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
