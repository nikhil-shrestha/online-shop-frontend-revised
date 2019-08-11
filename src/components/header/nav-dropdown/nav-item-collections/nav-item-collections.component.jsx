import React from 'react';

import NavItem from '../nav-item/nav-item.component';

const navItemCollections = ({ category: { name, image, subcategories } }) => {
  return (
    <li>
      <a href="#">
        {name}
        <br />
        <img src={image} alt={name} />
      </a>
      <ul className="list-unstyled">
        {subcategories.map(subs => {
          return <NavItem name={subs.name} />;
        })}
      </ul>
    </li>
  );
};

export default navItemCollections;
