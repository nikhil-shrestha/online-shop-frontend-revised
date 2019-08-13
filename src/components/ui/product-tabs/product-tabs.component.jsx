import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import './product-tabs.styles.scss';

export default class ProductTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="row textinfo">
        <div className="col-md-9">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                DESCRIPTION
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                SIZE GUIDE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                ADDITIONAL INFORMATION
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '4' })}
                onClick={() => {
                  this.toggle('4');
                }}
              >
                RATING(12)
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <strong>ITEM#: 16437098</strong>
              <br />
              <br />
              Bring a luxurious feel to your bed with this solid-color
              microfiber sheet set. Featuring a plain weave, these solid sheets
              coordinate effortlessly with your existing bedding set. The
              100-percent polyester microfiber construction gives this
              ultra-soft sheet set a plush texture, while the machine-washable
              fabrics allow for quick, convenient cleaning.
              <br />
              <br />
              <strong>Features:</strong>
              <ul>
                <li>Plain weave</li>
                <li>Solid color</li>
                <li>Machine washable</li>
                <li>Fully elasticized fitted sheet</li>
                <li>100-percent polyester microfiber</li>
                <li>Fitted sheet pocket depth of 15 inches</li>
                <li>1 flat sheet, 1 fitted sheet, 2 pillowcases</li>
                <li>Twin and twin XL sets come with 1 pillowcase</li>
                <li>
                  White, cream, gold, sage, grey, burgundy, aqua, navy, purple,
                  chocolate
                </li>
              </ul>
            </TabPane>
            <TabPane tabId="2">..g.</TabPane>

            <TabPane tabId="3">.h..</TabPane>

            <TabPane tabId="4">
              <div className="media">
                <img
                  className="mr-3"
                  src="https://placehold.it/80"
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <strong>Media heading</strong>
                  <br />
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </div>
              </div>
              <div className="media">
                <img
                  className="mr-3"
                  src="https://placehold.it/80"
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <strong>Media heading</strong>
                  <br />
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}
