import React, {useState, useEffect} from 'react';
// import {SwiperCard} from './SwiperCard'
import { data } from './SwiperData'

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Swiper.css'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function Swipe() {
  
    return (
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={() => console.log('swipe!')}
        onSlideChange={() => console.log('slide change')}
      >

        {data.map(project => (
            <SwiperSlide key={project.id}>
                <div className="cardWrapper">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${project.imageid}`} alt='screencapture' 
                    />
                    <div    className="cardTextWrapper">
                        <h3>{project.name} <span>/// Built using {project.languages}</span></h3>
                        <p>{project.description}</p>
                        <div className="cardLinks"><a href={`${project.link}`} target="_blank" rel="noreferrer">Live link</a></div>
                        <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${project.repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                    </div>
                </div>
            </SwiperSlide>
        ))}


        {/* <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[0].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[0].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[0].name} <span>/// Built using {data[0].languages}</span></h3>
                    <p>{data[0].description}</p>
                    <div className="cardLinks"><a href={`${data[0].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[0].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[1].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[1].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[1].name} <span>/// Built using {data[1].languages}</span></h3>
                    <p>{data[1].description}</p>
                    <div className="cardLinks"><a href={`${data[1].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[1].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[2].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[2].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[2].name} <span>/// Built using {data[2].languages}</span></h3>
                    <p>{data[2].description}</p>
                    <div className="cardLinks"><a href={`${data[2].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[2].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[3].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[3].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[3].name} <span>/// Built using {data[3].languages}</span></h3>
                    <p>{data[3].description}</p>
                    <div className="cardLinks"><a href={`${data[3].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[3].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
            <div className="cardWrapper">
                <a href={`https://katarzyna-kw.github.io/${data[4].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[4].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[4].name} <span>/// Built using {data[4].languages}</span></h3>
                    <p>{data[4].description}</p>
                    <div className="cardLinks"><a href={`https://katarzyna-kw.github.io/${data[4].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[4].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[5].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[5].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[5].name} <span>/// Built using {data[5].languages}</span></h3>
                    <p>{data[5].description}</p>
                    <div className="cardLinks"><a href={`${data[5].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[5].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
            <div className="cardWrapper">
                <a href={`https://katarzyna-kw.github.io/${data[6].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[6].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[6].name} <span>/// Built using {data[6].languages}</span></h3>
                    <p>{data[6].description}</p>
                    <div className="cardLinks"><a href={`https://katarzyna-kw.github.io/${data[6].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[6].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[7].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[7].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[7].name} <span>/// Built using {data[7].languages}</span></h3>
                    <p>{data[7].description}</p>
                    <div className="cardLinks"><a href={`${data[7].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[7].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[8].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[8].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[8].name} <span>/// Built using {data[8].languages}</span></h3>
                    <p>{data[8].description}</p>
                    <div className="cardLinks"><a href={`${data[8].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[8].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[9].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[9].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[9].name} <span>/// Built using {data[9].languages}</span></h3>
                    <p>{data[9].description}</p>
                    <div className="cardLinks"><a href={`${data[9].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[9].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[10].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[10].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[10].name} <span>/// Built using {data[10].languages}</span></h3>
                    <p>{data[10].description}</p>
                    <div className="cardLinks"><a href={`${data[10].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[10].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[11].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[11].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[11].name} <span>/// Built using {data[11].languages}</span></h3>
                    <p>{data[11].description}</p>
                    <div className="cardLinks"><a href={`${data[11].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[11].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href="https://606basketballacademy.com/" target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[12].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[12].name} <span>/// Built using {data[12].languages}</span></h3>
                    <p>{data[12].description}</p>
                    <div className="cardLinks"><a href={`${data[12].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="cardWrapper">
                <a href={`${data[13].link}`} target="_blank" rel="noreferrer">
                    <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${data[13].imageid}`} alt='screencapture' />
                </a>
                <div className="cardTextWrapper">
                    <h3>{data[13].name} <span>/// Built using {data[13].languages}</span></h3>
                    <p>{data[13].description}</p>
                    <div className="cardLinks"><a href={`${data[13].link}`} target="_blank" rel="noreferrer">Live link</a></div>
                    <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${data[13].repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
                </div>
            </div>
        </SwiperSlide> */}

        </Swiper>
    );
};  

  export default Swipe;