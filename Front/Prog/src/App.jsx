import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import './App.css'
import ilya from './Img/illustration.png'
import play from './Img/hover.png'
import fut1 from './Img/ic-chart.png'
import fut2 from './Img/ic-speaker.png'
import fut3 from './Img/ic-computer.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="secOne">
      <div className="OneMain container">
        <div className="OneLeft">
          <h2>Best <span>SEO & Marketing</span> Solutions for You</h2>
          <div className="Onebuts">
            <button>Get a free analysis</button>
            <div className="OnePlay">
              <img src={play} alt="" />
              <p>Play video</p>
            </div>
          </div>
        </div>
        <img src={ilya}  alt="" />

        </div>
        <div className="futerdiv">
          <div className="fut1"> <img src={fut1} alt="" /> <p>SEO Content Strategy</p></div>
          <div className="fut1"> <img src={fut2} alt="" /> <p>Content Marketing</p></div>
          <div className="fut1"> <img src={fut3} alt="" /> <p>Website & Social Media Marketing</p></div>
        </div>
      </div>
      
       
    </>
  )
}

export default App
