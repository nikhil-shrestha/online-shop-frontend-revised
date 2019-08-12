import React from 'react';

import ProductCard from '../ui/product-card/product-card.component';

import './feature-products.styles.scss';

const FEATURED_PRODUCT = [
  {
    id: '1',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  },
  {
    id: '2',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  },
  {
    id: '3',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  },
  {
    id: '4',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  },
  {
    id: '5',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  },
  {
    id: '6',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  },
  {
    id: '7',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  },
  {
    id: '8',
    title: 'CUSION',
    description: 'blue start print with cusion',
    price: 3000
  }
];

export default function featureProducts() {
  return (
    <section className="container">
      <h2>FEATURED PRODUCTS</h2>
      <div className="listbundle">
        {FEATURED_PRODUCT.map((product, idx) => (
          <ProductCard key={product.id} product={product} idx={idx} />
        ))}
      </div>
    </section>
  );
}
