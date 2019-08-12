import React from 'react';

import UpperBox from '../../components/upper-box/upper-box.component';
import FeatureProducts from '../../components/feature-products/feature-products.component';
import OfferBanner from '../../components/ads/offer-banner/offer-banner.component';
import FeatureCategories from '../../components/feature-categories/feature-categories.component';
import SpecialProducts from '../../components/special-products/special-products.component';
import SubBanner from '../../components/ads/sub-banner/sub-banner.component';
import BlogAndTestimonials from '../../components/blog-and-testimonials/blog-and-testimonials.component';

import './homepage.styles.scss';

const HomePage = () => (
  <React.Fragment>
    <UpperBox />
    <FeatureProducts />
    <OfferBanner />
    <FeatureCategories />
    <SpecialProducts />
    <SubBanner />
    <BlogAndTestimonials />
  </React.Fragment>
);

export default HomePage;
