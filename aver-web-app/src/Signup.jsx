import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  
  function handleNameInput(event) {
    setFullName(event.target.value);
  }

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleShowPwd() {
    setShowPwd(!showPwd);
  }

  return (
    <>
      <div className="container-sm signup_container">
        <div className="row">
          <div className="signup_title">Sign up</div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="NameInput"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => handleNameInput(e)}
          ></input>
          <label htmlFor="NameInput" className="form-label">
            Name
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="EmailInput"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleEmailInput(e)}
          ></input>
          <label htmlFor="EmailInput" className="form-label">
            Email
          </label>
        </div>
        <div className="password-row form-floating">
          <input
            type={showPwd ? "text" : "password"}
            className="form-control"
            id="PasswordInput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => handlePasswordInput(e)}
          ></input>
          <i className="fa-regular fa-eye" onClick={handleShowPwd}></i>
          <label htmlFor="PasswordInput" className="form-label">
            Password
          </label>
        </div>
        <div className="row forget-row">
          <div className="col">Forgot Password?</div>
        </div>
        <div className="row btn-row">
          <div className="col text-center">
            <button type="button" className="btn btn-outline-light signin-btn">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="row join-row">
        <div className="col text-center">
          <div className="join_now_text" onClick={() => navigate("/login")}>Have an account? Log in</div>
        </div>
      </div>
    </>
  );
}

export default Signup;
