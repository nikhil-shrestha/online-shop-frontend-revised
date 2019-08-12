import React from 'react';

import Blog from './blog/blog.component';
import Testimonials from './testimonials/testimonials.component';

import './blog-and-testimonials.styles.scss';

export default function blogAndTestimonials() {
  return (
    <section class="container">
      <div class="row">
        <div class="col-md-6">
          <Blog />
        </div>
        <div class="col-md-6">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
