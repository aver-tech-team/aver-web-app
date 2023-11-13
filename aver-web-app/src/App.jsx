import React, { useState } from 'react';
import Recorder from './Recorder';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="header">
        <div className="header_left">
          <h2>American Veterans for Equal Rights</h2>
        </div>
        <div className="header_right">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
      <div className="mainbody">
        <h2>About</h2>
        <p>This is a website dedicated to recording the stories of American Veterans.</p>

        <br /><br />

        <div className="recorder">
          <Recorder />
        </div>
      </div>

      <div className="footer">
        {/* Add your footer content here */}
      </div>
    </div>
  );
}

export default App;
