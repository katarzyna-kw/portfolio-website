import React, { useEffect, useState } from "react";
import sliderImage from './Slider/sliderImage';
import Arrows from './Slider/Arrows';
import Dots from './Slider/Dots';
import SliderContent from './Slider/SliderContent';
import "./slider.css";

const len = sliderImage.length - 1;

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} />
            <Arrows 
            prevSlide={() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
                setActiveIndex(activeIndex ===  len ? 0 : activeIndex + 1)
            }
            />
            <Dots activeIndex={activeIndex} 
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Slider