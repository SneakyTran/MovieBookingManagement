import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import BannerComponent from "./components/BannerComponent/BannerComponent";
import BlogComponent from "./components/BlogComponent/BlogComponent";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import ModalFilm from "./Templates/ModalFilm/ModalFilm";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <ModalFilm />
        <Switch>
          <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>

          {/* default url khi push nhánh nhớ đưa file vào Home*/}
          <HomeTemplate exact path="/" Component={Home}></HomeTemplate>

          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
