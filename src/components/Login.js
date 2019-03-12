import React from 'react';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login">
        
        <form className="login-form">
          <h2>Art Portolio</h2>
          <p>Username</p>
          <input name="username" type="text" placeholder="Your Username..." />
          <p>Password<span>Forgot password?</span></p>
          <input name="password" type="password" placeholder="Your Password..." />

          <div className="alternative-login">
            <p className="center-text">or sign in below</p>
            <div className="alternative-login-buttons">
              <button type="button">Twitter</button>
              <button type="button">Facebook</button>
            </div>

          </div>

          <button type="submit" className="login-button" onClick>LOGIN</button>

          <div className="login-page-register">
            <p>Need an account?<a>Sign up now!</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
