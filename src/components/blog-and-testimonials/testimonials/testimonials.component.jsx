import React from 'react';

import './testimonials.styles.scss';

export default function testimonials() {
  return (
    <div className="testimonial">
      <h2>Testimonials</h2>

      <div className="post-content-top">
        <div className="post-quotes" />
        <div className="image-block">
          <img
            alt=""
            src="https://magento.templatemela.com/MAG271/skin/frontend/templatemela/MAG110231/images/testimonials1.jpg"
          />
        </div>
        <div className="post-content-inner">
          <div className="post-author">
            <a href="#">Mr. Lorem Ipsum</a>
          </div>
          <div className="designation">Web Designer</div>
        </div>
      </div>

      <div className="post-content-bottom">
        <div className="post-description">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Excepteur sint occaecat
          cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}
