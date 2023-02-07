import React from 'react';
import HomeIcon from "../../assets/img/logo1.svg";


function Footer() {
  return (
    <div>
       <div class="footer">
      <div class="footer1">
        <i class="foot">
          <img src={HomeIcon} alt="" class="home-icon2" />
          <p class="around">Around<br />The World</p>
        </i>
        <p class="rights">© 2022 TripAdvisor LLC All rights reserved.</p>
      </div>
      <div class="footer2">
        <p class="sitemap">Privacy Policy Terms of Use Sitemap</p>
      </div>
      <div class="footer3">
        <p class="footnote">
          This is the version of our website addressed to speakers of English in
          India. If you are a resident of another country or region, please
          select the appropriate version of Tripadvisor for your country or
          region in the drop-down menu.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer
