import React from 'react';

import './collection-card.styles.scss';

export default function collectionCard({ title, subTitle, imageUrl, idx }) {
  return (
    <div className="col-md-4">
      <div className={`sub_banner${idx + 1} sub_banner`}>
        <div className="banner_image">
          <a href="#">
            <img src={imageUrl} alt="" />
          </a>
        </div>
        <div className="banner_text">
          <div className="text1">{title}</div>
          <div className="text2">{subTitle}</div>
          <div className="view_button">
            <a href="#"> view collection </a>
          </div>
        </div>
      </div>
    </div>
  );
}
