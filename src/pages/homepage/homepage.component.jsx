import React from 'react';

import UpperBox from '../../components/upper-box/upper-box.component';
import FeatureProducts from '../../components/feature-products/feature-products.component';
import OfferBanner from '../../components/ads/offer-banner/offer-banner.component';
import FeatureCategories from '../../components/feature-categories/feature-categories.component';

import './homepage.styles.scss';

const HomePage = () => (
  <React.Fragment>
    <UpperBox />
    <FeatureProducts />
    <OfferBanner />
    <FeatureCategories />
  </React.Fragment>
);

export default HomePage;
