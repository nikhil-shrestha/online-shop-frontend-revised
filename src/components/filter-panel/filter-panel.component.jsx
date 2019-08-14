import React from 'react';

import FilterDrawers from '../ui/filter-drawers/filter-drawers.component';

import clear from '../../assets/images/clear.svg';

import './filter-panel.styles.scss';

export default function filterSidepanel() {
  return (
    <div className="filter">
      <br />
      <div>
        <input type="text" className="noborder" name="" />
        <a href="#" className="cleardata">
          <img src={clear} alt="Clear" />
        </a>
      </div>

      <FilterDrawers />
    </div>
  );
}
