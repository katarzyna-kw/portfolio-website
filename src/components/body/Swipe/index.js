import { data } from "./SwiperData";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./Swiper.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Swipe() {
  let PortfolioList = data.map((project) => (
    <SwiperSlide key={project.id}>
      <div className="container">
        <a href={`${project.link}`} target="_blank" rel="noreferrer">
          <img
            src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${project.imageid}`}
            alt="screencapture" className="portfolio-img"
          />
        </a>
        <div className="card-text__container">
          <div className="card-text__header">
            <a href={`${project.link}`} target="_blank" rel="noreferrer">
              <h3 className="card-text__h3">{project.name}</h3>
            </a>
            {project.public === true ? (
                  <h4 className="card-text__h4">
                    // 
                    <a
                      href={`https://github.com/katarzyna-kw/${project.repo}`}
                      target="_blank"
                      rel="noreferrer"
                    ><span>
                      Github repo
                    </span>
                    </a>
                  </h4>
              ) : null}
            </div>
          {/* <h3>
            <span> / Built using {project.languages}</span>
          </h3> */}
          <p>{project.description}</p>
          {/* <div className="cardLinks">
            <a href={`${project.link}`} target="_blank" rel="noreferrer">
              Live link
            </a>
          </div> */}
          {/* <div className="cardLinks">
            {project.public === true ? (
              <a
                href={`https://github.com/katarzyna-kw/${project.repo}`}
                target="_blank"
                rel="noreferrer"
              >
                Github repo
              </a>
            ) : null}
          </div> */}
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={() => console.log("swipe!")}
      onSlideChange={() => console.log("slide change")}
    >
      {PortfolioList}
    </Swiper>
  );
}

export default Swipe;
