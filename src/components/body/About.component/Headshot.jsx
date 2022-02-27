import React from "react";
import bw from '../../../assets/kw--bw.png'
import color from '../../../assets/kw.png'

function Headshot() {
  return (
    <div class="figure">
      <img
        className="about__content--img img--main"
        src={bw}
        alt="Katarzyna Wegrzynowicz smiling at camera"
      />
      <img
        className="about__content--img img--hover"
        src={color}
        alt="Katarzyna Wegrzynowicz smiling at camera"
      />
    </div>
  );
}

export default Headshot;