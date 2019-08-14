import React from 'react';

import './breadcrum.styles.scss';

export default function breadcrum() {
  return (
    <div className="breadcrum">
      <span>
        <a href="#">Home</a>
      </span>
      <span>
        <a href="#">Home & Living</a>
      </span>
      <span>
        <a href="#">Home Decor</a>
      </span>
      <span>
        <a href="#">Bedding</a>
      </span>
      <span>
        <a href="#">Bed Linen</a>
      </span>
      <span>
        <a href="#">Bedsheets</a>
      </span>
      <span>
        <a href="#">Single Bed</a>
      </span>
    </div>
  );
}
