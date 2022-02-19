import React from "react";

function Headshot() {
  return (
    <img
      className="about__content--img"
      src={
        "https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle-bw.png?raw=true"
      }
      alt="Katarzyna Wegrzynowicz"
      onMouseOver={(e) =>
        (e.currentTarget.src =
          "https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle.png?raw=true")
      }
      onMouseOut={(e) =>
        (e.currentTarget.src =
          "https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle-bw.png?raw=true")
      }
    />
  );
}

export default Headshot;
