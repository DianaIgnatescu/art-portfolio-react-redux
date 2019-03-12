import React from 'react';


const SignUp = () => {
  return (
    <div className="sign-up-wrapper">
      <div className="sign-up">
        
        <form className="sign-up-form">
          <h2>Art Portolio</h2>
          <p>Email</p>
          <input name="username" type="text" placeholder="Your Email..." />
          <p>Password</p>
          <input name="password" type="password" placeholder="Create Password..." />
          <button type="button" className="sign-up-button">SIGN UP</button>
          <div className="alternative-sign-up">
            <p className="center-sign-up">or</p>
            <div className="alternative-sign-up-buttons">
              <button type="button">Sign up with Twitter</button>
              <button type="button">Sign up with Facebook</button>
              <button type="button">Sign up with Google</button>
            </div>
          </div>

          <p className="agreement">
            By continuing, you agree to Art Portolio's <span>Terms of Servicee</span>, <span>Privacy</span>, and <span>Cookie Use</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
