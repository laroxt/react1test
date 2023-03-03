import React from "react";
import RegisterInput from "./RegisterInput";

function RegisterForm() {
  return (
    <form className="form">
      <RegisterInput type="text" placeholder="Username" />
      <RegisterInput type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
