import './styles.css';
import Swipe from './Swipe'
// import '../../theme.css'

function Portfolio() {
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <Swipe />
      </div>
    </div>
);
}

export default Portfolio;