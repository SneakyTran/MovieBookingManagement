import axios from "axios";
import { DOMAIN_CINEMA, TOKEN } from "../../utils/setting";
import { ACCESS_TOKEN, LOGIN, OPEN_LOGIN, USER_LOGIN } from "../types/FormType";
import Login from "../../pages/Login/Login";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const loginAction = (userInfo) => {
    return (dispatch2) => {
        let promise = axios({
            url: `${DOMAIN_CINEMA}/QuanLyNguoiDung/DangNhap`,
            method: "post",
            data: userInfo,
            headers: {
                TokenCybersoft: TOKEN,
            },
        });
        promise.then((result) => {
            localStorage.setItem(
                ACCESS_TOKEN,
                JSON.stringify(result.data.content.accessToken)
            );

            toast.success("Login successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            let action = {
                type: LOGIN,
                uLogin: result.data.content,
            };
            dispatch2(action);

            let userInfo = JSON.stringify(result.data.content);
            console.log(result.data.content);
            localStorage.setItem(USER_LOGIN, userInfo);
        });
        promise.catch((error) => {
            console.log(error.response?.data);
            toast.error("Login failed!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
    };
};

export const registerAction = (userInfo) => {
    return (dispatch2) => {
        let promise = axios({
            url: `${DOMAIN_CINEMA}/QuanLyNguoiDung/DangKy`,
            method: "post",
            data: userInfo,
            headers: {
                TokenCybersoft: TOKEN,
            },
        });
        promise.then((result) => {
            toast.success("Register successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            dispatch2({ type: OPEN_LOGIN, modalLogin: <Login /> });
        });
        promise.catch((error) => {
            toast.error("Username or email is existed!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log(error.response?.data);
        });
    };
};

export const getUserInfoAction = (userInfo) => {
    return (dispatch2) => {
        let promise = axios({
            url: `${DOMAIN_CINEMA}QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: "post",
            // data: userInfo,
            headers: {
                Authorization: "Bearer" + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
                TokenCybersoft: TOKEN,
            },
        });
        promise.then((result) => {
            console.log(result.data);
            // let action = {
            //     type: "USER_PROFILE",
            //     userDetail: result.data.content,
            // };
            // dispatch2(action);
        });
        promise.catch((error) => {

            console.log(error.response?.data);
        });
    };
};
