import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { USER_UPDATE, USER_LOGIN, USER_PROFILE } from '../../redux/type/FormType';
import { DOMAIN_CINEMA, TOKEN } from '../../utils/setting';
import "./profile.css"


export default function Profile() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(state => state.FormReducer);
  
   const {taiKhoan,soDT,email,hoTen} = userProfile;
   console.log(userProfile)
  const formik = useFormik({
    initialValues: {
      taiKhoan: taiKhoan,
      hoTen: hoTen,
      soDT: soDT,
      email: email,
      matKhau: "******"
    },
    onSubmit: values => {
      console.log(values);
      dispatch({type:USER_UPDATE, userUpdate: values});
      localStorage.setItem(USER_LOGIN, JSON.stringify(values));
    },
  })

  return (
    <div className="container">
      <div className="row">
        <div className='user-btn'>
          <button className='btn btn-info mx-3'>Thông tin tài khoản</button>
          <button className='btn btn-info  mx-3'>Lịch sử đặt vé</button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src={`https://i.pravatar.cc/?u=${taiKhoan}`} alt="avatar" />
                    </div>
                    <h5 className="user-name">{formik.values.hoTen}</h5>
                  </div>
                  <div className="about">
                    <h5 className="mb-2 text-primary">About</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates corrupti dolores sint quaerat. Quam?</p>
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
                    <h6 className="mb-3 text-primary">Account infomation</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="taiKhoan">Account</label>
                      <input value={formik.values.taiKhoan}  onChange={formik.handleChange} type="text" className="form-control" id='taiKhoan' name="taiKhoan" disabled />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="matKhau">Password</label>
                      <input value={formik.values.matKhau}  onChange={formik.handleChange} type="text" className="form-control" id='matKhau' name='matKhau' placeholder="Enter your password" disabled/>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-3 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="hoTen">Fullname</label>
                      <input value={formik.values.hoTen}  onChange={formik.handleChange} type="text" className="form-control" id='hoTen' name="hoTen" placeholder="Enter full name" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input value={formik.values.email}  onChange={formik.handleChange} type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="soDT">Phone number</label>
                      <input value={formik.values.soDT}  onChange={formik.handleChange} type="text" className="form-control" id="soDT" name="soDT" placeholder="Enter your phone number" />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
