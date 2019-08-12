import React from 'react';

import SidePanel from './side-panel/side-panel.component';

import promImg from '../../assets/images/prom.jpg';
import promoImg from '../../assets/images/promo.png';
import returnImg from '../../assets/images/return.svg';
import shippingImg from '../../assets/images/shipping.svg';
import supportImg from '../../assets/images/support.svg';

import './upper-box.styles.scss';

const CATEGORIES = [
  {
    name: 'bedsheet',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  },
  {
    name: 'canvas',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  },
  {
    name: 'clock',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  },
  {
    name: 'curtains',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  },
  {
    name: 'cushion',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  },
  {
    name: 'duvet',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  },
  {
    name: 'wallpaper',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  },
  {
    name: 'wallsticker',
    subcategories: [
      {
        name: 'type1'
      },
      {
        name: 'type2'
      }
    ]
  }
];

export default function upperBox() {
  return (
    <main role="main" className="container-fluid afternav imagebg">
      <div className="container">
        <div className="row upperbox">
          <div className="col-md-2">
            <ul className="menu list-unstyled leftnav">
              {CATEGORIES.map(category => (
                <SidePanel key={category.name} category={category} />
              ))}
            </ul>
          </div>
          <div className="col-md-7">
            <div className="d-flex justify-content-center">
              <img
                src={promImg}
                alt="Image"
                className="imagemainimg-fluid center"
              />
            </div>
          </div>
          <div className="col-md-3">
            <a href="">
              <img src={promoImg} alt="Promo Code" className="img-fluid" />
            </a>
            <table className="featureslist table">
              <tbody>
                <tr>
                  <td>
                    <img src={returnImg} alt="Image" />
                  </td>
                  <td>
                    100% satisfaction if
                    <br className="hidden-xs" /> you are unable
                  </td>
                </tr>
                <tr>
                  <td className="bordertop">
                    <img src={shippingImg} alt="Image" />
                  </td>
                  <td className="bordertop">
                    Free delivery within <br className="hidden-xs" />
                    10 km
                  </td>
                </tr>
                <tr>
                  <td className="bordertop">
                    <img src={supportImg} alt="Image" />
                  </td>
                  <td className="bordertop">
                    Gift and Vouchers <br className="hidden-xs" />
                    in events
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
