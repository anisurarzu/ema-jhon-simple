import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Register: Create Account</h2>
        <form>
          <input type="email" placeholder="Your email" />
          <br />
          <input type="password" placeholder="enter your password" />
          <br />
          <input type="password" placeholder="Re-enter Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <p>
          Already Have an account <Link to="/login">Login</Link>
        </p>
        <div>---------------or--------------</div>
        <button className="btn-regular">GoogleSignIn</button>
      </div>
    </div>
  );
};

export default Register;
