import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  function handleUserNameInput(event) {
    setUserName(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleShowPwd() {
    setShowPwd(!showPwd);
  }

  return (
    <>
      <div className="container-sm login_container">
        <div className="row">
          <div className="login_title">Sign in</div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="UsernameInput"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => handleUserNameInput(e)}
          ></input>
          <label htmlFor="UsernameInput" className="form-label">
            Username
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
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="row join-row">
        <div className="col text-center">
          <div className="join_now_text" onClick={() => navigate("/signup")}>New to AVER? Join Now</div>
        </div>
      </div>
    </>
  );
}

export default Login;
