import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import "./login.css";

const Login = () => {
  const { googleLogin, googleLogout } = useAuth();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const redirectUrl = location.state?.from || "/shop";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        history.push(redirectUrl);
      })
      .catch((error) => {});
  };
  return (
    <div className="login-form">
      <div>
        <h2>Log In</h2>
        <form>
          <input type="email" name="email" placeholder="Your Email" />
          <br />
          <input type="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>
          new to ema-john <Link to="/register">Create Account</Link>
        </p>
        <div>---------------or----------------</div>
        <button onClick={handleGoogleLogin} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
