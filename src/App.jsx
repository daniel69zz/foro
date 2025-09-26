import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/tema' element={<Home/>}/>
          </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
