import React from 'react';

import skype from '../../assets/images/skype.svg';
import phone from '../../assets/images/phone.svg';

import './header-items.styles.scss';

export default function headerItems() {
  return (
    <div class="uppernav">
      <div class="container">
        <div class="header-offerzone">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Daily Deals</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Sell</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Help &amp; Contact</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Special Zone</a>
            </li>
          </ul>
        </div>
        <div class="navinfo">
          <select>
            <option>NRS</option>
            <option>USD</option>
          </select>
          <a href="skype:itsmesushan">
            <img src={skype} alt="Skype" /> Skype
          </a>
          <a href="callto:9843779601">
            <img src={phone} alt="Skype" /> 9843779601
          </a>
        </div>
      </div>
    </div>
  );
}
