import axios from "axios";
import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    USER_UPDATE,
    USER_LOGIN,
    USER_PROFILE,
} from "../../redux/types/FormType";
import { DOMAIN_CINEMA, TOKEN } from "../../utils/setting";
import * as Yup from "yup";
import "./profile.css";
import bgSrc from "../../assets/img/bg.jpg";

export default function Profile() {
    const dispatch = useDispatch();
    const { userProfile } = useSelector((state) => state.FormReducer);
    const [tabActive, setTabActive] = useState(0);
    useEffect(() => {
        setTabActive(0);
    }, []);
    const { taiKhoan, soDT, email, hoTen } = userProfile;

    const formik = useFormik({
        initialValues: {
            taiKhoan: taiKhoan,
            hoTen: hoTen,
            soDT: soDT,
            email: email,
            matKhau: "******",
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tài khoản không được để trống"),
            matKhau: Yup.string()
                .required("Mật khẩu không được để trống")
                .min(6, "Mật khẩu ít nhất có 6 kí tự."),
            email: Yup.string()
                .required("Email không được để trống")
                .email("Email chưa đúng định dạng"),
            hoTen: Yup.string()
                .required("Họ tên không được để trống")
                .matches(/^[A-Z a-z]+$/, "Họ tên không đúng định dạng"),
            soDT: Yup.string()
                .required("Số điện thoại không được để trống")
                .matches(/^[0-9]*$/, "Số điện thoại phải là số"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch({ type: USER_UPDATE, userUpdate: values });
            localStorage.setItem(USER_LOGIN, JSON.stringify(values));
        },
    });

    useEffect(() => {
        renderUserProfile();
    }, [tabActive]);

    const renderUserProfile = () => {
        if (tabActive === 0) {
            return (
                <form onSubmit={formik.handleSubmit}>
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="account-settings">
                                        <div className="user-profile">
                                            <div className="user-avatar">
                                                <img
                                                    src={`https://i.pravatar.cc/?u=${taiKhoan}`}
                                                    alt="avatar"
                                                />
                                            </div>
                                            <h5 className="user-name">
                                                {formik.values.hoTen}
                                            </h5>
                                        </div>
                                        <div className="about">
                                            <h5 className="mb-2 text-primary">
                                                About
                                            </h5>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Minus voluptates corrupti
                                                dolores sint quaerat. Quam?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-3 text-primary">
                                                Account infomation
                                            </h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="taiKhoan">
                                                    Account
                                                </label>
                                                <input
                                                    value={
                                                        formik.values.taiKhoan
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    type="text"
                                                    className="form-control"
                                                    id="taiKhoan"
                                                    name="taiKhoan"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="matKhau">
                                                    Password
                                                </label>
                                                <input
                                                    value={
                                                        formik.values.matKhau
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    type="text"
                                                    className="form-control"
                                                    id="matKhau"
                                                    name="matKhau"
                                                    placeholder="Enter your password"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-3 text-primary">
                                                Personal Details
                                            </h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="hoTen">
                                                    Fullname
                                                </label>
                                                <input
                                                    value={formik.values.hoTen}
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    type="text"
                                                    className="form-control"
                                                    id="hoTen"
                                                    name="hoTen"
                                                    placeholder="Enter full name"
                                                />
                                                {formik.touched.hoTen &&
                                                formik.errors.hoTen ? (
                                                    <span className="text-danger">
                                                        {formik.errors.hoTen}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="email">
                                                    Email
                                                </label>
                                                <input
                                                    value={formik.values.email}
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                />
                                                {formik.touched.email &&
                                                formik.errors.email ? (
                                                    <span className="text-danger">
                                                        {formik.errors.email}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="soDT">
                                                    Phone number
                                                </label>
                                                <input
                                                    value={formik.values.soDT}
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    type="text"
                                                    className="form-control"
                                                    id="soDT"
                                                    name="soDT"
                                                    placeholder="Enter your phone number"
                                                />
                                                {formik.touched.soDT &&
                                                formik.errors.soDT ? (
                                                    <span className="text-danger">
                                                        {formik.errors.soDT}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="btn_div">
                                                <button
                                                    type="submit"
                                                    className="btn_movie"
                                                >
                                                    Update
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            );
        } else {
            return <div>Booking history</div>;
        }
    };

    return (
        <Fragment>
            <div className="profile__bg mt-2">
                <div className="bg__overlay"></div>
                <img className="img-fluid" src={bgSrc} alt="" />
            </div>
            <div className="container">
                <div className="user__profile">
                    <div className="user-btn">
                        <p
                            onClick={() => {
                                setTabActive(0);
                            }}
                            className={`mx-3 ${
                                tabActive === 0 ? "tab--active" : ""
                            }`}
                        >
                            User Profile
                        </p>
                        <p
                            onClick={() => {
                                setTabActive(1);
                            }}
                            className={`mx-3 ${
                                tabActive === 1 ? "tab--active" : ""
                            }`}
                        >
                            Booking history
                        </p>
                    </div>
                </div>
                {renderUserProfile()}
            </div>
            <div className="mb-5"></div>
        </Fragment>
    );
}
