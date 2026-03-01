import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import lo1 from './Img/lo1.png'
import lo2 from './Img/lo2.png'
import lo3 from './Img/lo3.png'
import lo4 from './Img/lo4.png'
import lo5 from './Img/lo5.png'
import lo6 from './Img/lo6.png'
import cir1 from './Img/circle1.png'
import cir2 from './Img/circle2.png'
import cir3 from './Img/circle3.png'
import cir4 from './Img/circle4.png'

// import required modules
import { Pagination } from 'swiper/modules';
import './slider.css';

export default function Slider1() {
   const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3000/table1")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError('Failed to load data. Please try again later.');
      });
  }, []);
  
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h2 className="slider-title">Read our clients' case studies</h2>
        <div className="custom-navigation">
          <button 
            className="custom-prev" 
            onClick={goPrev}
            aria-label="Предыдущий слайд"
          >
            ←
          </button>
          <button 
            className="custom-next" 
            onClick={goNext}
            aria-label="Следующий слайд"
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    
          {data.map((item) => (
            <SwiperSlide key={item.id}>
            <div className='slidediv'>
                <img className='logosl' src={item.photo || lo4} alt="" />
                <h5>{item.name1}</h5>
                <hr />
                <p className='descreption'>
                   {item.desc}
                </p>
                <div className='circles'> 
                    <div className='circlemini'><img src={cir2} alt="" />
                    <div><h2>{item.cir1}</h2> <p>{item.qu1}</p></div>
                    </div>
                     <div className='circlemini'><img src={cir1} alt="" />
                    <div><h2>{item.cir2}</h2> <p>{item.qu1}</p></div>
                    </div>
                   
                </div>
            </div>
            </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
}