import './services.css'
import phone from './Img/iPhone.png'
import { Link } from 'react-router-dom'
export default function Services(){
    return(
        <><section className="secServicesHero">
  <div className="servicesHeroMain">

    <div className="servicesBreadcrumbs">
    <Link to="/">  <span>Home</span></Link>
      <span>›</span>
      <span>Services</span>
    </div>

    <h1>Our services</h1>

    <p className="servicesDesc">
      We offer more than services. Our agency provides solutions to your
      top-priority concerns, involving customer targeting, email performance
      and sales growth. If there is no existing solution readily available,
      we create one, specifically to suit your business.
    </p>

    <div className="servicesHeroButtons">
      <button className="btnPrimary">Start now</button>

      <div className="servicesCall">
          <img src={phone} alt="" />
        <div>
          
          <span>Call us</span>
          <p>(405) 555-0128</p>
        </div>
      </div>
    </div>

  </div>
</section>
<section className="secSMM">
  <div className="smmMain">

    <div className="smmLeft">
      <h2>Social Media Marketing</h2>

      <p>
        Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus,
        turpis accumsan gravida. Aliquet mattis dignissim massa sociis, a
        bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis
        enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus
        sed purus senectus faucibus eget elementum pretium.
      </p>

      <div className="smmButtons">
        <button className="smmBtnOutline">Learn more</button>
        <button className="smmBtnFill">Try SEO toolkit</button>
      </div>
    </div>

    <div className="smmRight">
      <div className="smmImage"></div>
    </div>

  </div>
</section>
</>
    )
}

