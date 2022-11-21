 
import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    USER_UPDATE,
    USER_LOGIN,
    USER_PROFILE,
} from "../../redux/types/FormType";
import * as Yup from "yup";
import "./profile.css";
import bgSrc from "../../assets/img/bg.jpg";
import { updateUser } from "../../redux/actions/FormAction";

export default function Profile() {
    const dispatch = useDispatch();
    const { userProfile } = useSelector((state) => state.FormReducer);
    const [tabActive, setTabActive] = useState(0);
    useEffect(() => {
        setTabActive(0);
    }, []);
    useEffect(() => {
      setUProfile(userProfile)
    },[userProfile])

    let [uProfile,setUProfile] = useState({ 
      taiKhoan: "",
      hoTen: "",
      soDT: "",
      email: "",
      matKhau: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    })
      const { taiKhoan, soDT, email, hoTen, matKhau } = uProfile;
      console.log(uProfile)
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            taiKhoan: taiKhoan,
            hoTen: hoTen,
            soDT: soDT,
            email: email,
            matKhau: matKhau,
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Username is not empty!"),
            matKhau: Yup.string()
                .required("Passwword is not empty!")
                .min(6, "Password must be have at least 6 characters"),
            email: Yup.string()
                .required("Email is not empty!")
                .email("Email is not valid"),
            hoTen: Yup.string()
                .required("Fullname is not empty")
                .matches(/^[A-Z a-z]+$/, "Fullname is not valid"),
            soDT: Yup.string()
                .required("Phone number is not empty")
                .matches(/^[0-9]*$/, "Phone number must be contain only number"),
        }),
        onSubmit: (values) => {
            let action = updateUser(values)
            dispatch(action)
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
