import React, { Component } from 'react';

import ImageSlider from '../../components/ui/slider/image-slider/image-slider.component';
import ProductTabs from '../../components/ui/product-tabs/product-tabs.component';

import fav from '../../assets/images/fav.png';
import unfav from '../../assets/images/unfav.png';
import returnImg from '../../assets/images/return.svg';
import shipping from '../../assets/images/shipping.svg';
import support from '../../assets/images/support.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import gplus from '../../assets/images/gplus.svg';
import viber from '../../assets/images/viber.svg';

import './product-details.styles.scss';

export default class ProductDetails extends Component {
  render() {
    return (
      <div>
        <main role="main" className="container afternav">
          <div className="breadcrum">
            <span>
              <a href="#">Home</a>
            </span>
            <span>
              <a href="#">Home & Living</a>
            </span>
            <span>
              <a href="#">Home Decor</a>
            </span>
            <span>
              <a href="#">Bedding</a>
            </span>
            <span>
              <a href="#">Bed Linen</a>
            </span>
            <span>
              <a href="#">Bedsheets</a>
            </span>
            <span>
              <a href="#">Single Bed</a>
            </span>
          </div>
          <div className="row">
            <div className="col-md-7">
              <ImageSlider />
            </div>
            <div className="col-md-5 description">
              <div className="favtoggle float-right">
                <img src={fav} />
                <img src={unfav} style={{ display: 'none' }} />
              </div>
              <div className="author">By KAPPA</div>
              <div className="productname">Kappa bedsheet</div>
              <div className="category">
                KAAPA White/Red Floral Printed Single Size Bedsheet
              </div>
              <br />
              <div className="currency">NPR</div>
              <div className="features float-right">
                <a
                  href="#"
                  className="return"
                  data-toggle="tooltip"
                  title="30 Days Return"
                >
                  <img src={returnImg} alt="return" />
                </a>
                <a
                  href="#"
                  className="shipping"
                  data-toggle="tooltip"
                  title="Free delivery within 10kms"
                >
                  <img src={shipping} alt="Shipping" />
                </a>
                <a
                  href="#"
                  className="support"
                  data-toggle="tooltip"
                  title=" Support 24/24 for all order "
                >
                  <img src={support} alt="Support" />
                </a>
              </div>
              <div className="amount">1,500.00</div>
              <br />
              <div className="quantity">Quantity</div>
              <div className="input-group datecounter float-left">
                <button
                  type="button"
                  className="btn btn-default btn-number plus"
                  disabled="disabled"
                  data-type="minus"
                  data-field="quant[1]"
                >
                  -
                </button>
                <input
                  type="text"
                  name="quant[1]"
                  className="form-control input-number"
                  value="1"
                  min="1"
                  max="10"
                />
                <button
                  type="button"
                  className="btn btn-default btn-number minus"
                  data-type="plus"
                  data-field="quant[1]"
                >
                  +
                </button>
              </div>
              <button className="btn lgaddtocart">Add to Cart</button>
              <br />
              <br />
              <div className="shippingcharge">
                <span>Shipping Charge</span>
                <br />
                <span className="data">Inside kathmandu valley NPR 300/-</span>
                <br />
                <span className="data">Outside kathmandu valley NPR 500/-</span>
              </div>
              <div className="share">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">
                          <img src={twitter} alt="Twitter" />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <img src={facebook} alt="Facebook" />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <img src={viber} alt="Viber" />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <img src={gplus} alt="Google plus" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <br />
              <div className="additionalinfo">
                <table>
                  <tbody>
                    <tr>
                      <td className="freesp">Free Shipping</td>
                      <td className="moneyback">100% Money Back Guaratee</td>
                      <td className="support">Online support 24*7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ProductTabs />
        </main>

        <br className="hidden-xs" />
        <br className="hidden-xs" />
        <br className="hidden-xs" />
      </div>
    );
  }
}
