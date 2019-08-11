import React from 'react';

import NavDropdown from '../nav-dropdown/nav-dropdown.component';
import NavItemCollections from '../nav-dropdown/nav-item-collections/nav-item-collections.component';

import logo from '../../../assets/images/logo.png';
import search from '../../../assets/images/search.svg';
import account from '../../../assets/images/account.svg';
import cart from '../../../assets/images/basket.svg';
import nav1 from '../../../assets/images/nav1.jpg';
import nav2 from '../../../assets/images/nav2.jpg';
import nav3 from '../../../assets/images/nav3.jpg';
import nav4 from '../../../assets/images/nav4.jpg';
import nav5 from '../../../assets/images/nav5.jpg';
import nav6 from '../../../assets/images/nav6.jpg';
import nav7 from '../../../assets/images/nav7.jpg';
import nav8 from '../../../assets/images/nav8.jpg';

import './header-content.styles.scss';

const CATEGORIES = [
  {
    name: 'bedsheet',
    image: nav1,
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
    image: nav2,
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
    image: nav3,
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
    image: nav4,
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
    image: nav5,
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
    image: nav6,
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
    image: nav7,
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
    image: nav8,
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

export default function headerContent() {
  return (
    <nav class="navbar navbar-expand-md sticky-top">
      <div class="container">
        <div class="d-flex align-items-center w-100">
          <a class="navbar-brand" href="#">
            <img src={logo} class="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="navbar-toggler-icon" />
            <br />
            <div class="navbar-toggler-icon" />
            <br />
            <div class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="nav navbar-nav ml-auto w-25 justify-content-start mainav actionbuttons">
              <NavDropdown name="SHOP" subName="NOW">
                <ul className="list-inline">
                  {CATEGORIES.map(category => {
                    return (
                      <NavItemCollections
                        key={category.name}
                        category={category}
                      />
                    );
                  })}
                </ul>
              </NavDropdown>
            </ul>
            <ul class="nav navbar-nav ml-auto w-75 justify-content-center searchnav">
              <li class="nav-item" style={{ width: '100%' }}>
                <input type="text" class="navsearch" />
              </li>
            </ul>
            <ul class="nav navbar-nav ml-auto w-75 justify-content-end actionbuttons righside">
              <NavDropdown name="SIGN IN &" subName="FREE JOIN" credentials>
                <ul className="list-unstyled">
                  <li>
                    <a href="" title="My Account">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="" title="My Wishlist">
                      My Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="" title="Checkout" className="top-link-checkout">
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a href="" title="Log In">
                      Log In
                    </a>
                  </li>
                </ul>
              </NavDropdown>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SHOPPING <br className="hidden-xs" />
                  BORA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
