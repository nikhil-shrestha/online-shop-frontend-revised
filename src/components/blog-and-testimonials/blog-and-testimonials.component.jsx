import React from 'react';

import Blog from './blog/blog.component';
import Testimonials from './testimonials/testimonials.component';

import './blog-and-testimonials.styles.scss';

export default function blogAndTestimonials() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6">
          <Blog />
        </div>
        <div className="col-md-6">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
