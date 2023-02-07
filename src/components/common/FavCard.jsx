import React from 'react';
import WhiteHeart from '../../assets/img/heart-white.svg';
import EgyptThree from '../../assets/img/egypt 3.png';
import ItalyFour from '../../assets/img/italy 4.png';
import India from '../../assets/img/india 1.png';
import France from '../../assets/img/france 1.png';
import Italy from '../../assets/img/italy 1.png';
import FranceThree from '../../assets/img/france 3.png';

function FavCard() {
  return (
    <div>
      <div>
      <h1 class="world">Favourites</h1>
    </div>

    <div>
      <h1 class="attractions2">Tourist Attractions</h1>
    </div>

    <div class="img">
      <div>
        <img src={EgyptThree} alt="" class="images" />
        <h4 class="place-n">Pyramids of Giza</h4>
        <p class="place-d">A cultural landmark in Al Giza Desert.</p>
        <img class="like" src={WhiteHeart} alt="" />
      </div>

      <div>
        <img src={ItalyFour} alt="" class="images2" />
        <h4 class="place-n">Grand Canal</h4>
        <p class="place-d">A series of canal in Venice.</p>
        <img class="like" src={WhiteHeart} alt="" />
      </div>
    </div>

    <div class="img">
      <div>
        <img src={India} alt="" class="images" />
        <h4 class="place-n">Taj Mahal</h4>
        <p class="place-d">A cultural landmark Angra.</p>
        <img class="like" src={WhiteHeart} alt="" />
      </div>

      <div>
        <img src={France} alt="" class="images2" />
        <h4 class="place-n">Eiffel Tower</h4>
        <p class="place-d">A cultural landmark in Paris.</p>
        <img class="like" src={WhiteHeart} alt="" />
      </div>
    </div>

    <div class="img">
      <div>
        <img src={Italy} alt="" class="images" />
        <h4 class="place-n">Coloseeum</h4>
        <p class="place-d">A cultural landmark in Rome.</p>
        <img class="like" src={WhiteHeart} alt="" />
      </div>

      <div>
        <img src={FranceThree} alt="" class="images2" />
        <h4 class="place-n">Arc de Triomphe</h4>
        <p class="place-d">A monument in Paris.</p>
        <img class="like" src={WhiteHeart} alt="" />
      </div>
    </div>
    </div>
  )
}

export default FavCard
