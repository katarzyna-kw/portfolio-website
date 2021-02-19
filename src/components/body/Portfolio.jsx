import './styles.css';
import Slider from './Slider';
import Swiper from './Swiper';

function Portfolio() {
  return (
    <div id="portfolio">
    <h2>Portfolio</h2>
      <div className="portfolio-container">
      <Slider />
      <Swiper />
      </div>
    </div>
);
}

export default Portfolio;