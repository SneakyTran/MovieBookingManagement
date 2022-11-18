import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import AddMovie from "./pages/Admin/MovieAdmin/AddMovie/AddMovie";
import EditMovie from "./pages/Admin/MovieAdmin/EditMovie/EditMovie";
import MovieAdmin from "./pages/Admin/MovieAdmin/MovieAdmin";
import ShowtimeAdmin from "./pages/Admin/MovieAdmin/ShowtimeAdmin/ShowtimeAdmin";

import Booking from "./pages/Booking/Booking";
import AddUser from "./pages/Admin/UserAdmin/AddUser/AddUser";
import EditUser from "./pages/Admin/UserAdmin/EditUser/EditUser";
import User from "./pages/Admin/UserAdmin/User";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import BookingTemplate from "./Templates/BookingTemplate/BookingTemplate";
import ModalFilm from "./Templates/ModalFilm/ModalFilm";
import React, { Suspense } from "react";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";

export const history = createBrowserHistory();

function App() {
    return (
        <BrowserRouter>
            <Router history={history}>
                <LoadingComponent />
                <ModalFilm />
                <Switch>
                    <HomeTemplate
                        exact
                        path="/home"
                        Component={Home}
                    ></HomeTemplate>

                    {/* default url khi push nhánh nhớ đưa file vào Home*/}

                    <HomeTemplate
                        exact
                        path="/"
                        Component={Home}
                    ></HomeTemplate>

                    <HomeTemplate
                        exact
                        path="/login"
                        Component={Login}
                    ></HomeTemplate>

                    <BookingTemplate
                        exact
                        path="/booking/:id/:time"
                        Component={Booking}
                    ></BookingTemplate>

                    {/* admin */}
                    <AdminTemplate exact path="/admin" Component={User} />
                    <AdminTemplate
                        exact
                        path="/admin/useradmin"
                        Component={User}
                    />
                    <AdminTemplate
                        exact
                        path="/admin/movieadmin"
                        Component={MovieAdmin}
                    />
                    <AdminTemplate
                        exact
                        path="/admin/movieadmin/showtimeadmin/:maPhim"
                        Component={ShowtimeAdmin}
                    />
                    <AdminTemplate
                        exact
                        path="/admin/movieadmin/addmovie"
                        Component={AddMovie}
                    />
                    <AdminTemplate
                        exact
                        path="/admin/movieadmin/editmovie/:maPhim"
                        Component={EditMovie}
                    />
                    <AdminTemplate
                        exact
                        path="/admin/edituser/adduser"
                        Component={AddUser}
                    />
                    <AdminTemplate
                        exact
                        path="/admin/edituser/:taiKhoan"
                        Component={EditUser}
                    />

                    {/*  */}
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default App;
