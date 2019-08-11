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
    <main role="main" class="container-fluid afternav imagebg">
      <div class="container">
        <div class="row upperbox">
          <div class="col-md-2">
            <ul class="menu list-unstyled leftnav">
              {CATEGORIES.map(category => (
                <SidePanel category={category} />
              ))}
            </ul>
          </div>
          <div class="col-md-7">
            <div class="d-flex justify-content-center">
              <img
                src={promImg}
                alt="Image"
                class="imagemainimg-fluid center"
              />
            </div>
          </div>
          <div class="col-md-3">
            <a href="">
              <img src={promoImg} alt="Promo Code" class="img-fluid" />
            </a>
            <table class="featureslist table">
              <tr>
                <td>
                  <img src={returnImg} alt="Image" />
                </td>
                <td>
                  100% satisfaction if
                  <br class="hidden-xs" /> you are unable
                </td>
              </tr>
              <tr>
                <td class="bordertop">
                  <img src={shippingImg} alt="Image" />
                </td>
                <td class="bordertop">
                  Free delivery within <br class="hidden-xs" />
                  10 km
                </td>
              </tr>
              <tr>
                <td class="bordertop">
                  <img src={supportImg} alt="Image" />
                </td>
                <td class="bordertop">
                  Gift and Vouchers <br class="hidden-xs" />
                  in events
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
