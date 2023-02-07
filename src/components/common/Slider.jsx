import React from "react";
import LightblueBg from '../../assets/img/light blue background.png';
import India from '../../assets/img/india-01.png';
import Egypt from '../../assets/img/egypt-01.png';
import Italy from '../../assets/img/italy-01.png';
import France from '../../assets/img/france-01.png';


function Slider() {
  return (
    <div>
      <div>
        <h1 class="popular-places">Popular Places</h1>
      </div>

      <div class="parent">
        <img
          src={LightblueBg}
          alt=""
          class="lightblue-backg"
        />
        <img
          src={LightblueBg}
          alt=""
          class="lightblue-backg2"
        />
        <img
          src={LightblueBg}
          alt=""
          class="lightblue-backg3"
        />
        <img
          src={LightblueBg}
          alt=""
          class="lightblue-backg4"
        />
        <img src={Egypt} alt="" class="sphinx" />
        <a href="./egypt.html" class="alink">
          <button class="sphinx">Egypt</button>
        </a>
        <img src={Italy} alt="" class="colos" />
        <a href="./italy.html" class="alink">
          <button class="colos">Italy</button>
        </a>
        <img src={India} alt="" class="taj" />
        <a href="./india.html" class="alink">
          <button class="taj">India</button>
        </a>
        <img src={France} alt="" class="eiffel" />
        <a href="./france.html" class="alink">
          <button class="eiffel">France</button>
        </a>
        <a href="/favourites" class="alink">
          <button class="fav">Favourites</button>
        </a>
      </div>
    </div>
  );
}

export default Slider;
