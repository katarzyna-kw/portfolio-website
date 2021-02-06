import React from 'react'
import sliderImage from './sliderImage';
import { Link } from 'react-router-dom';

function SliderContent(props) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div 
                    key={index}
                    className={index === props.activeIndex ? "slides active" : "inactive"}
                >
                    {/* <Link to={`${slide.link}}`}> */}
                        <img className="slide-image" src={slide.urls} alt={slide.alt} />
                        {/* </Link> */}
                    <h5 className="slide-text">{slide.description}</h5>
                </div>
            ))}
        </section>
    );
}

export default SliderContent