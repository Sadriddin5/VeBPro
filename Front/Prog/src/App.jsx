import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import pic from './Img/pic.png'
import pic2 from './Img/pic2.png'
import ilya from './Img/illustration.png'
import play from './Img/hover.png'
import fut1 from './Img/ic-chart.png'
import fut2 from './Img/ic-speaker.png'
import fut3 from './Img/ic-computer.png'
import im1 from './Img/im1.png'
import im2 from './Img/im2.png'
import im3 from './Img/im3.png'
import im4 from './Img/im4.png'
import lo1 from './Img/lo1.png'
import lo2 from './Img/lo2.png'
import lo3 from './Img/lo3.png'
import lo4 from './Img/lo4.png'
import lo5 from './Img/lo5.png'
import lo6 from './Img/lo6.png'
import b4im from './Img/ilya5.png'
import pr1 from './Img/pr1.png'
import pr2 from './Img/pr2.png'
import pr3 from './Img/pr3.png'
import pr4 from './Img/pr4.png'
import mark from './Img/Mark.png'
import fonb6 from './Img/pbB6.png'
import ilya2 from './Img/ilya2.png'
import ilya3 from './Img/ilya3.png'
import ilya5 from './Img/ilya5.png'
import ch from './Img/checked.png'
import plus from './Img/plus.png'
import minus from './Img/minus.png'
import ic10 from './Img/ic-speaker.png'
import ic11 from './Img/ic-target.png'
import ic12 from './Img/ic-checklist.png'
import ic13 from './Img/ic-chat.png'
import ic14 from './Img/ic-like.png'
import ic15 from './Img/ic-view.png'
import Slider1 from './Pages/slider1.jsx'

function App() {
  const [count, setCount] = useState(0)
const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    agreement: false
});

const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');
const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
    }));
};
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.website) {
        setMessage("Заполните все поля");
        return;
    }

    if (!formData.agreement) {
        setMessage("Необходимо принять соглашение");
        return;
    }

    try {
        setLoading(true);
        setMessage("");

        const response = await axios.post(
            "http://localhost:3000/seo-request",
            formData
        );

        if (response.data.success) {
            setMessage("Заявка успешно отправлена!");
            setFormData({
                name: '',
                email: '',
                website: '',
                agreement: false
            });
        }

    } catch (error) {
        setMessage(
            error.response?.data?.message || "Ошибка отправки"
        );
    } finally {
        setLoading(false);
    }
};
  return (
    <>
      <div className="secOne">
      <div className="OneMain">
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
        <img className='ilya' src={ilya}  alt="" />

        </div>
        <div className="futerdiv">
          <div className="fut1"> <img src={fut1} alt="" /> <p>SEO Content Strategy</p></div>
          <div className="fut1"> <img src={fut2} alt="" /> <p>Content Marketing</p></div>
          <div className="fut1"> <img src={fut3} alt="" /> <p>Website & Social Media Marketing</p></div>
        </div>
      </div>
      <section className='sec1B2'>
       <div className="B2main">
        <div className="b2Left">
          <h1>Createx SEO Agency is a full-service digital marketing agency
            . We help businesses make more money through a wealth of 
            performance data and market research.
             We create science-based SEO strategies
             to empower our clients.</h1>
        </div>
        <div className="B2right">
          <div className="b2one"><img src={im1} alt="" /> <p>Top SEO Companies 2020 by Clutch</p></div>
          <div className="b2one"><img src={im2} alt="" /> <p>Top Digital Marketing Agency 2019 by UpCity</p></div>
          <div className="b2one"><img src={im3} alt="" /> <p>Official Member 2020 by Forbes Agency Council</p></div>
          <div className="b2one"><img src={im4} alt="" /> <p>Top SEO Companies 2020 by Top Developers</p></div>
        </div>
       </div>
      </section>
      <section className='b3S1'>
        <div className="b3Main">
        <img src={lo1} alt="" />
        <img src={lo2} alt="" />
        <img src={lo3} alt="" />
        <img src={lo4} alt="" />
        <img src={lo5} alt="" />
        <img src={lo6} alt="" />
        </div>
      </section>
      <section className='b4s1'>
        <div className="b4main">
          <div className="b4left">
            <h1>Createx Agency </h1>
            <p>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus,
               suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
            <button>More about us</button>
          </div>
          <img src={b4im} alt="" />
        </div>
      </section>
       <section className='b5s1'>
        <div className="b5s1Main">
          <div className="item1b5"> <img src={pr1} alt="" /> <p>Years of experience</p></div>
          <div className="item1b5"> <img src={pr2} alt="" /> <p>Awards</p></div>
          <div className="item1b5"> <img src={pr3} alt="" /> <p>Projects</p></div>
          <div className="item1b5"> <img src={pr4} alt="" /> <p>Happy clients</p></div>
        </div>
       </section>
       <section className='b6s1'>
        <div className="b6s1Main">
          <h2>Our services</h2>
          <div className="butsb6">
            <div><p>Social Media</p></div>
            <div><p>SEO</p></div>
            <div><p>Research</p></div>
            <div><p>Content & PR</p></div>
            <div><p>Payed Traffic</p></div>
          </div>
          <div className="s1b6img">
          <div className="b6left">
            <h3>Complete Worflow For Any SEO Professional</h3>
            <div className="ptickab6">
              <div><img src={mark} alt="" /><p>Aenean enim tellus morbi nisl vulputate dictumst.</p></div>
              <div><img src={mark} alt="" /><p>Nibh sapien volutpat lacus augue.</p></div>
              <div><img src={mark} alt="" /><p>Vel in amet, placerat adipiscing est pharetra.</p></div>
              <div><img src={mark} alt="" /><p>Gravida ornare sit in et ut sit sem id.</p></div>
              <div><img src={mark} alt="" /><p>Ultrices pellentesque dictum enim egestas ac diam.</p></div>
              <div><img src={mark} alt="" /><p>Sit semper enim senectus integer ut turpis et.</p></div>
            </div>
            <div className="butsb6s1">
              <button className='but1s1b6'>Learn more</button>
              <button className=' but2s1b6'>Try SEO toolkit</button>
            </div>
          </div>
          <img src={fonb6}className="b6right" alt="" />

          </div>
        </div>
       </section>
       <section className='sec1B7DB'>
  <div className="b7DBMain">
    <img src={ilya2} alt="" />

    <div className="b7right">
      <h2>Get a Free SEO Analysis!</h2>

      <form onSubmit={handleSubmit}>

        <div className='b7inputs'>
          <div>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Your working email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>
        </div>

        <div className='biginputB7'>
          <p>Your website URL</p>
          <input
            type="text"
            name="website"
            placeholder="http://yoursite.com"
            value={formData.website}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>

        <div className="textButB7">
          <div className="textb7">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleInputChange}
              disabled={loading}
            />
            <p>
              I agree to receive communications from Createx SEO Agency
            </p>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Get a free analysis"}
          </button>
        </div>

      </form>

      {message && (
        <div style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: message.includes("успешно")
            ? "#d4edda"
            : "#f8d7da",
          color: message.includes("успешно")
            ? "#155724"
            : "#721c24",
          borderRadius: "4px",
          textAlign: "center"
        }}>
          {message}
        </div>
      )}
    </div>
  </div>
</section>
       <section className='s1b8'>
        <div className="s1b8Main">
          <div className="b8left">
            <h2>Freequently Ask Questions</h2>
            <div className="queb8">
              <div className="minus"><img src={minus} alt="" /> <div><h3>Aliquet lectus urna viverra in odio?</h3><p>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p></div> </div>
              <div className="plus"> <img src={plus} alt="" /> <h3>Orci commodo, viverra orci mollis ut euismod?</h3></div>
              <div className="plus"> <img src={plus} alt="" /> <h3>Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</h3></div>
              <div className="plus"> <img src={plus} alt="" /> <h3>In id dolor quis nunc, urna hendrerit pharetra?</h3></div>
            </div>
            <button>Discover more-> </button>
          </div>
          <img src={ilya3} alt="" />
        </div>
       </section>
        <section className="secB9Cases">
      <div className="b9CasesMain">
         <Slider1/>
       
        <div className="b9Bottom">
          <p>Explore more case studies</p>
          <button>View all case studies</button>
        </div>

      </div>
    </section>
    <section className="secB10Benefits">
  <div className="b10BenefitsMain">

    <h2>Our benefits</h2>

    <div className="b10BenefitsContent">

      <div className="b10Col">
        <div className="b10Card">
          <img src={ic10} alt="" />
          <h3>Social Advertising Experts</h3>
          <p>
            Culpa nostrud commodo ea consequat aliquip reprehenderit.
            Veniam velit nostrud aliquip sunt.
          </p>
        </div>

        <div className="b10Card">
          <img src={ic11} alt="" />
          <h3>ROI Focused Campaigns</h3>
          <p>
            Cursus sit eu viverra suspendisse eu quisque enim est tortor.
          </p>
        </div>

        <div className="b10Card">
         <img src={ic12} alt="" />
          <h3>Monthly Reporting</h3>
          <p>
            Aenean urna dictum adipiscing nec, cras quisque nunc.
          </p>
        </div>
      </div>

      <div className="b10Center">
        <img src={ilya5} alt="" />
      </div>

      <div className="b10Col">
        <div className="b10Card">
          <img src={ic13} alt="" />
          <h3>Quality Customer Service</h3>
          <p>
            Sed nunc scelerisque ipsum acum, proin nunc euismod purus.
          </p>
        </div>

        <div className="b10Card">
         <img src={ic14} alt="" />
          <h3>Complete SEO Transparency</h3>
          <p>
            Culpa nostrud commodo ea consequat aliquip reprehenderit.
          </p>
        </div>

        <div className="b10Card">
          <img src={ic15} alt="" />
          <h3>We're a True Partner</h3>
          <p>
            Quis sed malesuada tincidunt amet, vitae mi justo.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="secB11Pricing">
  <div className="b11PricingMain">

    <h2>Flexible pricing plans</h2>

    <div className="b11Toggle">
      <button className="active">Monthly</button>
      <button>Yearly <span>-12% Off</span></button>
    </div>

    <div className="b11PricingCards">

     
      <div className="b11Card">
        <h3>Basic</h3>
        <div className="b11Price">
          <span>$24</span>
          <p>/mon</p>
        </div>

        <ul>
          <li>Advanced Analytics</li>
          <li>Change Management</li>
          <li>Corporate Finance</li>
          <li>One Way Link Building</li>
          <li>Social Media Marketing</li>
          <li className="disabled">Strategy & Marketing</li>
          <li className="disabled">Information Technology</li>
        </ul>

        <button className="b11Btn">Choose plan</button>
      </div>

      <div className="b11Card">
        <h3>Optimal</h3>
        <div className="b11Price">
          <span>$64</span>
          <p>/mon</p>
        </div>

        <ul>
          <li>Advanced Analytics</li>
          <li>Change Management</li>
          <li>Corporate Finance</li>
          <li>One Way Link Building</li>
          <li>Social Media Marketing</li>
          <li>Strategy & Marketing</li>
          <li className="disabled">Information Technology</li>
        </ul>

        <button className="b11Btn">Choose plan</button>
      </div>

      <div className="b11Card">
        <h3>Premium</h3>
        <div className="b11Price">
          <span>$98</span>
          <p>/mon</p>
        </div>

        <ul>
          <li>Advanced Analytics</li>
          <li>Change Management</li>
          <li>Corporate Finance</li>
          <li>One Way Link Building</li>
          <li>Social Media Marketing</li>
          <li>Strategy & Marketing</li>
          <li>Information Technology</li>
        </ul>

        <button className="b11Btn">Choose plan</button>
      </div>

    </div>
  </div>
</section>
<section className="secB12News">
  <div className="b12NewsMain">

    <div className="b12NewsLeft">
      <h2>Latest news</h2>
      <p>
        Check more posts in our blog for
        featured news and advertising insights
      </p>
      <button>Go to blog</button>
    </div>

    <div className="b12NewsRight">

      
      <div className="b12Card">
        <div className="b12Img">
          <img src={pic2} alt="" />
        </div>

        <div className="b12Meta">
          <span>SEO</span>
          <span>•</span>
          <span>July 5, 2020</span>
          <span>•</span>
          <span>By Diane McCoy</span>
        </div>

        <h3>The Basics of Blogging Search Engine Optimization.</h3>

        <p className="b12Desc">
          Mauris tincidunt sollicitudin tristique odio eget
          volutpat. Fringilla viverra amet, mi interdum blandit...
        </p>

        <a href="#">Read more →</a>
      </div>

      <div className="b12Card">
        <div className="b12Img">
         <img src={pic} alt="" />
        </div>

        <div className="b12Meta">
          <span>Marketing</span>
          <span>•</span>
          <span>July 2, 2020</span>
          <span>•</span>
          <span>By Diane McCoy</span>
        </div>

        <h3>The Basics of Blogging Search Engine Optimization.</h3>

        <p className="b12Desc">
          Mauris tincidunt sollicitudin tristique odio eget
          volutpat. Fringilla viverra amet, mi interdum blandit...
        </p>

        <a href="#">Read more →</a>
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default App
