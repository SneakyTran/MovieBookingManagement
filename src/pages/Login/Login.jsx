import React from 'react';
import styles from "./login.module.css";



export default function Login() {
  return (
    <div className={styles.login_box}>
          <h2>Login</h2>
          <form>
            <div className={styles.user_box}>
              <input type="text" name="username" required />
              <label>Username</label>
            </div>
            <div className={styles.user_box}>
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <a style={{width:"70%",margin:"40px auto 0"}} className={styles.form_submit} href="/home">
              <span />
              <span />
              <span />
              <span />
              Submit
            </a>
          </form>

        </div>

  )
}

