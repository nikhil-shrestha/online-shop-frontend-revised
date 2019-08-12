import React from 'react';

import './category-card.styles.scss';

export default function categoryCard({ title, description, imageUrl }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="text-muted">{description}</div>
          <br />
          <img
            className="card-img-top img-fluid"
            src={imageUrl}
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  );
}
