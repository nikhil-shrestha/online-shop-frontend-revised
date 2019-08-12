import React from 'react';

import fav from '../../../assets/images/fav.png';
import unfav from '../../../assets/images/unfav.png';
import cart from '../../../assets/images/cart.svg';

import './product-card.styles.scss';

export default function productCard({
  product: { title, description, price },
  idx
}) {
  return (
    <div className={`productlist animated fadeInUp animation${idx + 1}`}>
      <img src="assets/images/thumb2.jpg" alt="Thumb" />
      <div className="content">
        <div className="listcat">{title}</div>
        <div className="listsubcat">{description}</div>
        <table className="producttable">
          <tbody>
            <tr>
              <td>
                <span className="float-left price">
                  Rs. {price.toLocaleString()}
                </span>
              </td>
              <td className="">
                <div className="favtoggle">
                  <img src={fav} alt="fav" />
                  <img src={unfav} style={{ display: 'none' }} alt="unfav" />
                </div>
              </td>
              <td className="">
                <a href="#" title="Add to Cart">
                  <img src={cart} className="addtocart" alt="cart" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
