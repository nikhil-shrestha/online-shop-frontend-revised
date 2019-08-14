import React from 'react';

import PriceFilter from './price-filter/price-filter.component';
import BrandFilter from './brand-filter/brand-filter.component';
import TypesFilter from './types-filter/types-filter.component';
import ColorFilter from './color-filter/color-filter.component';
import DiscountFilter from './discount-filter/discount-filter.component';
import RatingFilter from './rating-filter/rating-filter.component';

export default function filterDrawers() {
  return (
    <div>
      <PriceFilter />
      <BrandFilter />
      <TypesFilter />
      <ColorFilter />
      <DiscountFilter />
      <RatingFilter />
    </div>
  );
}
