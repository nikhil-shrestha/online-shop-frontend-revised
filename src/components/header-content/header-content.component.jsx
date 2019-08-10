import React from 'react';

import logo from '../../assets/images/logo.png';

import './header-content.styles.scss';

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
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                >
                  SHOP
                  <br />
                  NOW
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown">
                  <ul class="list-inline">
                    <li class="wow bounceInUp">
                      <a href="#">
                        bedsheet
                        <br />
                        <img src="assets/images/nav1.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 2">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        canvas
                        <br />
                        <img src="assets/images/nav2.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="1 panel canvas">
                            1 panel canvas
                          </a>
                        </li>
                        <li>
                          <a href="#" title="3 panel canvas">
                            3 panel canvas
                          </a>
                        </li>
                        <li>
                          <a href="#" title="5 panel canvas">
                            5 panel canvas
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        clock
                        <br />
                        <img src="assets/images/nav3.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 2">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        curtains
                        <br />
                        <img src="assets/images/nav4.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 2">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        cushion
                        <br />
                        <img src="assets/images/nav5.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        duvet
                        <br />
                        <img src="assets/images/nav6.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        wall paper
                        <br />
                        <img src="assets/images/nav7.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 1">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        wall sticker
                        <br />
                        <img src="assets/images/nav8.jpg" />
                      </a>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" title="bedroom">
                            bedroom
                          </a>
                        </li>
                        <li>
                          <a href="#" title="family lounge">
                            family lounge
                          </a>
                        </li>
                        <li>
                          <a href="#" title="kids room">
                            kids room
                          </a>
                        </li>
                        <li>
                          <a href="#" title="nursery room">
                            nursery room
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul class="nav navbar-nav ml-auto w-75 justify-content-center searchnav">
              <li class="nav-item" style={{ width: '100%' }}>
                <input type="text" class="navsearch" />
              </li>
            </ul>
            <ul class="nav navbar-nav ml-auto w-75 justify-content-end actionbuttons righside">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                >
                  SIGN IN &<br />
                  FREE JOIN
                </a>
                <div
                  class="dropdown-menu credentials"
                  aria-labelledby="dropdown"
                >
                  <ul class="list-unstyled">
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
                      <a href="" title="Checkout" class="top-link-checkout">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="" title="Log In">
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SHOPPING <br class="hidden-xs" />
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
