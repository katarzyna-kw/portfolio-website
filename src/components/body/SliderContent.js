import React from 'react'
import sliderImage from './sliderImage';

function SliderContent(props) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div 
                    key={index}
                    className={index === props.activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.urls} alt='' />
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-text">{slide.description}</p>
                </div>
            ))}
        </section>
    );
}

export default SliderContent