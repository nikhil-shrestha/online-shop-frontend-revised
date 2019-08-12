import React from 'react';

import UpperBox from '../../components/upper-box/upper-box.component';
import FeatureProducts from '../../components/feature-products/feature-products.component';
import OfferBanner from '../../components/banner/offer-banner/offer-banner.component';
import FeatureCategories from '../../components/feature-categories/feature-categories.component';
import SpecialProducts from '../../components/special-products/special-products.component';
import SubBanner from '../../components/banner/sub-banner/sub-banner.component';
import BlogAndTestimonials from '../../components/blog-and-testimonials/blog-and-testimonials.component';
import FooterSliderAndFollowUs from '../../components/footer-slider-and-follow-us/footer-slider-and-follow-us.component';

import WithSpinner from '../../hoc/with-spinner/with-spinner.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  state = {
    loading: true
  };
  render() {
    return (
      <React.Fragment>
        <UpperBox />
        <FeatureProducts />
        <OfferBanner />
        <FeatureCategories />
        <SpecialProducts />
        <SubBanner />
        <BlogAndTestimonials />
        <FooterSliderAndFollowUs />
      </React.Fragment>
    );
  }
}

export default WithSpinner(HomePage);
