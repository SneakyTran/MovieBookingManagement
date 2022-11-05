import React from 'react'
import { useDispatch } from 'react-redux';
import Login from '../Login/Login';
import styles from "../Login/login.module.css";

export default function Register() {
  const dispatch = useDispatch();
  const openModalLogin = () => dispatch({ type: "OPEN_LOGIN", modalLogin: <Login/> });
  return (
    <div className={styles.login_box}>
        <h2>Register</h2>
        <form>
          <div className="row">
            <div className="col-6">
              <div className={styles.user_box}>
                <input type="text" name="taiKhoan" required />
                <label>Account</label>
              </div>
              <div className={styles.user_box}>
                <input type="password" name="matKhau" required />
                <label>Password</label>
              </div>
              <div className={styles.user_box}>
                <input type="password" name="xacNhanMK" required />
                <label>Password Confirm</label>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.user_box}>
                <input type="text" name="hoTen" required />
                <label>Username</label>
              </div>
              <div className={styles.user_box}>
                <input type="text" name="email" required />
                <label>Email</label>
              </div>
              <div className={styles.user_box}>
                <input type="text" name="soDt" required />
                <label>Phone number</label>
              </div>
              <a onClick={() => {
                openModalLogin()
              }} className={styles.form_submit}>
                <span />
                <span />
                <span />
                <span />
                Submit
              </a>
            </div>
          </div>
        </form>
      </div>
  )
}
