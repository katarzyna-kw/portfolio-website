// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Slider.css'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default () => {
    return (
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <img
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/0.png?raw=true"
                alt="election map website screencapture" 
            />
            <h5>
                Election map coded with Javascript given html and css // <a href="https://www.skillcrush.com" target="_blank" rel="noreferrer">Skillcrush</a> project // <a href="https://github.com/katarzyna-kw/election-map-project" target="_blank" rel="noreferrer">github repo</a></h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/1.png?raw=true"
                alt="quote generator screencapture"
            />
            <h5>Responsive quote generator coded with vanilla Javascript // <a href="https://github.com/katarzyna-kw/quote-generator" target="_blank" rel="noreferrer">github repo</a></h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/2a.png?raw=true" 
                alt="cat clock screencapture"
            />
            <h5>Clock coded with Javascript and styled given html and template css code // <a href="https://www.skillcrush.com" target="_blank" rel="noreferrer">Skillcrush</a> project // <a href="https://github.com/katarzyna-kw/lolcat" target="_blank" rel="noreferrer">github repo</a></h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/3.png?raw=true" 
                alt="survey form screencapture"
            />
            <h5>Responsive mock survey form coded with HTML and CSS  // <a href="https://www.freecodecamp.com" target="_blank" rel="noreferrer">freecodecamp.com</a> project // <a href="https://github.com/katarzyna-kw/fcc-challenge-2" target="_blank" rel="noreferrer">github repo</a></h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
            src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/4.p.png?raw=true"
            alt="mock school website screencapture"
        />
        <h5>Responsive mock website for Polish school coded with HTML and CSS  // <a href="https://www.freecodecamp.com" target="_blank" rel="noreferrer">freecodecamp.com</a> project // <a href="https://github.com/katarzyna-kw/fcc-challenge-3" target="_blank" rel="noreferrer">github repo</a></h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
            src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/5.png?raw=true"
            alt="mock school website screencapture"
        />
        <h5>Responsive mock documentation page coded with HTML, CSS, and Javascript  // <a href="https://www.freecodecamp.com" target="_blank" rel="noreferrer">freecodecamp.com</a> project // <a href="https://github.com/katarzyna-kw/fcc-challenge-4" target="_blank" rel="noreferrer">github repo</a></h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
            src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/6.png?raw=true"
            alt="digital stretching routine website screencapture"
        />
        <h5>Stretching routine website coded with HTML and CSS // <a href="https://github.com/katarzyna-kw/stretch" target="_blank" rel="noreferrer">github repo</a></h5>
        </SwiperSlide>

      </Swiper>
    );
  };  