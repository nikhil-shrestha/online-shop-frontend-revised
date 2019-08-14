import React from 'react';

import Breadcrum from '../../components/ui/breadcrum/breadcrum.component';
import FilterPanel from '../../components/filter-panel/filter-panel.component';
import ProductCard from '../../components/ui/product-card/product-card.component';

import './product-list.styles.scss';

const PRODUCTS = [
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

export default function productList() {
  return (
    <div>
      <main role="main" className="container afternav">
        <Breadcrum />
        <div className="row" id="textbox" style={{ clear: 'both' }}>
          <div className="col-md-12">
            <h3 className="title alignleft">HOME DECORATION</h3>
            <p className="alignright">
              <div className="form-inline" style={{ float: 'right' }}>
                <label for="inputState" className=" col-md-4 titleSortBy">
                  Sort By
                </label>
                <select
                  id="inputState"
                  className="form-control col-md-7 selectCustom"
                >
                  <option selected>New Arrivals</option>
                  <option>...</option>
                </select>
              </div>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <FilterPanel />
          </div>
          <div className="col-md-9">
            <div className="listing">
              <div className="listbundle">
                {PRODUCTS.map((product, idx) => (
                  <ProductCard key={product.id} product={product} idx={idx} />
                ))}
              </div>

              <p className="detailsPara">
                Decorate your home in a way that reflects your personality with
                art and accent pieces from the maya.com art gallery by home
                decor . Choose from a broad selection of print and canvas art
                with a more traditional appeal, or from abstract pieces that can
                provoke thought or promote conversation with guests. If your
                home has a contemporary decor, choose a piece from the
                collections of metal or wood wall art. These three-dimensional
                pieces are similar to sculptures, but they do not require
                placement on a table or shelf, making them ideal for rooms with
                limited surface space. Browse a selection of vinyl wall art
                decals featuring inspirational quotes for your family room or
                popular cartoon characters for your child's bedroom.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="container">
        <h2>Most popular in this category</h2>
        <div className="listbundle">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={product.id} product={product} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
