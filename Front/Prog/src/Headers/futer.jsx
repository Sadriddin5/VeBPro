import './futer.css'
import { Link } from 'react-router-dom'
import logo from './imgs/logo.png'
import tw1 from './imgs/tw1.png'
import tw2 from './imgs/tw2.png'
import tw3 from './imgs/tw3.png'
import tw4 from './imgs/tw4.png'
import a1 from './imgs/a1.png'
import a2 from './imgs/a2.png'
import a3 from './imgs/a3.png'
import a4 from './imgs/a4.png'
import a5 from './imgs/btn1.png'
export default function Futer(){
    return(
        <>
        <section className='futerSec'>
          
          
            <div className="MainFut">
                <div className="f1">
                    <div className="f1col1">
                        <img src={logo} alt="" />
                        <p>Createx SEO Agency is a full-service digital marketing agency.
                             We help businesses make more money through
                             a wealth of performance data and 
                             market research. 
                            We create science-based SEO strategies 
                            to empower our clients.</p>
                        <div className="twit">
                            <img src={tw1} alt="" />
                            <img src={tw2} alt="" />
                            <img src={tw3} alt="" />
                            <img src={tw4} alt="" />
                        </div>
                    </div>
                    <div className="f1col2">
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Case Studies</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Contacts</p>
                    </div>
                     <div className="f1col2">
                        <h3>SERVICES</h3>
                        <p>Social Media</p>
                        <p>SEO</p>
                        <p>Research</p>
                        <p>Content & PR</p>
                        <p>Payed Traffic</p>
                    </div>
                    <div className="f1col3">
                        <h3>CONTACT US</h3>
                        <div><img src="" alt="" /> <p>(405) 555-0128</p></div>
                        <div><img src="" alt="" /> <p>hello@createx.com</p></div>
                    </div>
                    <div className="f1col4">
                        <h3>SIGN UP TO OUR NEWSLETTER</h3>
                        <textarea name="" placeholder='->' id=""></textarea>
                        <p>*Subscribe to our newsletter to receive communications
                             and early updates from Createx SEO Agency.</p>
                    </div>
                </div>
                   <hr />
                <div className="f2">
                    <div className="leftf2">
                        <img src={a1} alt="" />
                        <img src={a2} alt="" />
                        <img src={a3} alt="" />
                        <img src={a4} alt="" />
                    </div>
                    <div className="rightf2">
                        <p>GO TO TOP</p>
                        <img src={a5} alt="" />
                    </div>
                </div>
             
                <div className="f3">
                    <p>© All rights reserved.Made with </p>
                    <p> by Createx Studio </p>
                </div>
        
            </div>
        </section>
        </>
    )
}