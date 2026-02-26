

import { Link } from 'react-router-dom'
import logo from './imgs/logo.png'
import './heeader.css'
export default function Heeader(){
    return(
        <>
        <div className="head">
           
                <div className="liks">
                    <img src={logo} alt="" />
                <a href="">Services</a>
                <a href="">Case Studies</a>
                <a href="">About Us</a>
                <a href="">Blog</a>
                <a href="">Contacts</a>
                </div>
           
            <button><p>Talk to a human</p></button>
        </div>
        </>
    )
}