import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="header_left">
          <h2>American Veterans for Equal Rights</h2>
        </div>
        <div className="header_right">
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button>Signup</button>
        </div>
      </div>
      <div className="mainbody">
        <h2>About</h2>
        <p>
          This is a website dedicated to recording the stories of American
          Veterans.
        </p>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Home;
