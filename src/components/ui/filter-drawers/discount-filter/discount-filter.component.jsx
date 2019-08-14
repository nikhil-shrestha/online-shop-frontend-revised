import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

import './discount-filter.styles.scss';

class DiscountFilter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const { collapse } = this.state;
    return (
      <div className="filterdiscount">
        <div onClick={this.toggle}>
          <h4>
            <label
              className={`title searchTitle ${collapse ? 'collapsed' : ''}`}
            >
              Discounts
            </label>
          </h4>
        </div>
        <Collapse isOpen={collapse}>
          <ul className="list-unstyled brands">
            <li>
              <label for="check7">50% Off or More</label>
              <span className="pull-right toRight">(154)</span>
            </li>
            <li>
              <label for="check7">30% Off or More</label>
              <span className="pull-right toRight">(154)</span>
            </li>
            <li>
              <label for="check7">20% Off or More</label>
              <span className="pull-right toRight">(154)</span>
            </li>
            <li>
              <label for="check7">10% Off or More</label>
              <span className="pull-right toRight">(154)</span>
            </li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default DiscountFilter;
