import React from 'react';

import banner from '../../../assets/images/offer-banner.png';

import './offer-banner.styles.scss';

export default function offerBanner() {
  return (
    <section className="container">
      <div className="subbanner-inner">
        <div className="banner-img">
          <a href="#" className="">
            <img src={banner} alt="Offer Banner" className="img-fluid" />
          </a>
        </div>
        <div className="banner-text">
          <div className="bnr-text">get your lovedones</div>
          <div className="bnr-title">a new cushion</div>
        </div>
      </div>
    </section>
  );
}
