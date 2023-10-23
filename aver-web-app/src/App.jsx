import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="header">
        <div class = "header_left">
          <h2>American Veterans for Equal Rights</h2>
        </div>
        <div class = "header_right">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
      <div class="mainbody">
        <h2>About</h2>
        <p>This is a website dedicated to recording the stories of American Veterans.</p>
      </div>
      <div class="footer">
        
      </div>
    </>
  )
}

export default App
