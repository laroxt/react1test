import React from "react";
import LoginInput from "./LoginInput";

function LoginForm(props) {
  return (
    <form className="form">
      <LoginInput type="text" placeholder="Username" />
      <LoginInput type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <LoginInput type="password" placeholder="Confirm password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default LoginForm;
