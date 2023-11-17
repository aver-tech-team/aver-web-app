import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import signupService from "./services/comm"

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
    
  const user = {
    name: event.name
  }
  }

  function handleSubmitForm(event) {
    event.preventDefault()
    const signup = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    signupService.create(signup).then(response => {
    })
  }

  return (
    <>
      <form onSubmit={handleSubmitForm} action="" method="get" class="form-example">
        <div className="signup_page">
          <div className="container-sm signup_container">
            <div className="row">
              <div className="signup_title">Sign up</div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => handleNameInput(e)}
              ></input>
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => handleEmailInput(e)}
              ></input>
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="password-row form-floating">
              <input
                type={showPwd ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => handlePasswordInput(e)}
              ></input>
              <i className="fa-regular fa-eye" onClick={handleShowPwd}></i>
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>
            <div className="row btn-row">
              <div className="col text-center">
                <button className="btn btn-outline-light signin-btn" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="join_now_text" onClick={() => navigate("/login")}>
              <a>Have an account? Log in</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
