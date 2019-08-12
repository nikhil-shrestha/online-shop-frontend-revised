import React from 'react';

import FooterSlider from '../ui/slider/footer-slider/footer-slider.component';
import FollowUs from './follow-us/follow-us.component';

export default function footerSliderAndFollowUs() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-9">
          <FooterSlider />
        </div>
        <div className="col-md-3">
          <FollowUs />
        </div>
      </div>
    </section>
  );
}
