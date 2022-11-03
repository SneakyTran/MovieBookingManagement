import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import BannerComponent from "./components/BannerComponent/BannerComponent";
import BlogComponent from "./components/BlogComponent/BlogComponent";
import Header from "./components/HeaderComponent/HeaderRFC";
import Home from "./pages/Home/Home";
import ModalFilm from "./Templates/ModalFilm/ModalFilm";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router history={history}>
        <ModalFilm />
        <Switch>
          <Route exact path="/home" component={Home}></Route>

          {/* default url khi push nhánh nhớ đưa file vào Home*/}
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
