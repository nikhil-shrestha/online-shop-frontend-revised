import React from 'react';

const sidePanel = ({ category: { name, image, subcategories } }) => {
  return (
    <li>
      <a href="#">{name}</a>
      <ul className="submenu">
        {subcategories.map(subs => {
          return (
            <li key={subs.name}>
              <a href="#">{subs.name}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default sidePanel;
