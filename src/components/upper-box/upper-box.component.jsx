import React from 'react';

export default function upperBox() {
  return (
    <main role="main" class="container-fluid afternav imagebg">
      <div class="container">
        <div class="row upperbox">
          <div class="col-md-2">
            <ul class="menu list-unstyled leftnav">
              <li>
                bedsheet
                <ul class="submenu">
                  <li>
                    <a href="#">type 1</a>
                    <ul class="lastlevel">
                      <li>
                        <a href="#">subtype 1</a>
                      </li>
                      <li>
                        <a href="#">subtype 2</a>
                      </li>
                      <li>
                        <a href="#">subtype 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">type 2</a>
                  </li>
                </ul>
              </li>
              <li>
                canvas
                <ul class="submenu">
                  <li>
                    <a href="#">1 panel canvas</a>
                  </li>
                  <li>
                    <a href="#">3 panel canvas</a>
                  </li>
                  <li>
                    <a href="#">5 panel canvas</a>
                  </li>
                </ul>
              </li>
              <li>
                clock
                <ul class="submenu">
                  <li>
                    <a href="#">type 1</a>
                  </li>
                  <li>
                    <a href="#">type 2</a>
                  </li>
                </ul>
              </li>
              <li>
                curtain
                <ul class="submenu">
                  <li>
                    <a href="#">type 1</a>
                  </li>
                  <li>
                    <a href="#">type 2</a>
                  </li>
                </ul>
              </li>
              <li>
                cusion
                <ul class="submenu">
                  <li>
                    <a href="#">type 1</a>
                  </li>
                </ul>
              </li>
              <li>
                duvet
                <ul class="submenu">
                  <li>
                    <a href="#">type 1</a>
                  </li>
                </ul>
              </li>
              <li>
                wall paper
                <ul class="submenu">
                  <li>
                    <a href="#">type 1</a>
                  </li>
                  <li>
                    <a href="#">type 2</a>
                  </li>
                </ul>
              </li>
              <li>
                wall sticker
                <ul class="submenu">
                  <li>
                    <a href="#">bedroom</a>
                  </li>
                  <li>
                    <a href="#">family lounge</a>
                  </li>
                  <li>
                    <a href="#">kids room</a>
                  </li>
                  <li>
                    <a href="#">nursery room</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-md-7">
            <div class="d-flex justify-content-center">
              <img
                src="assets/images/prom.jpg"
                alt="Image"
                class="imagemainimg-fluid center"
              />
            </div>
          </div>
          <div class="col-md-3">
            <a href="">
              <img
                src="assets/images/promo.png"
                alt="Promo Code"
                class="img-fluid"
              />
            </a>
            <table class="featureslist table">
              <tr>
                <td>
                  <img src="assets/images/return.svg" alt="Image" />
                </td>
                <td>
                  100% satisfaction if
                  <br class="hidden-xs" /> you are unable
                </td>
              </tr>
              <tr>
                <td class="bordertop">
                  <img src="assets/images/shipping.svg" alt="Image" />
                </td>
                <td class="bordertop">
                  Free delivery within <br class="hidden-xs" />
                  10 km
                </td>
              </tr>
              <tr>
                <td class="bordertop">
                  <img src="assets/images/support.svg" alt="Image" />
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
