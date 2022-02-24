import Swipe from "../Swipe/index";
import "./styles.css"

function Portfolio() {
  return (
    <div id="portfolio">
      <h2 className="body__header">Portfolio</h2>
      <div className="portfolio-container">
        <Swipe />
      </div>
    </div>
  );
}

export default Portfolio;
