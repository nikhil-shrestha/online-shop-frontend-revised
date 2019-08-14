import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { Rate } from 'antd';

import './rating-filter.styles.scss';

class RatingFilter extends Component {
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
      <div className="filter-ratings">
        <div onClick={this.toggle}>
          <h4>
            <label
              className={`title searchTitle ${collapse ? 'collapsed' : ''}`}
            >
              Ratings
            </label>
          </h4>
        </div>
        <Collapse isOpen={collapse}>
          <ul className="list-unstyled">
            <li>
              <fieldset className="rating">
                <Rate disabled defaultValue={5} />
                <span className="pull-right toRight brands">(55)</span>
              </fieldset>
            </li>
            <li>
              <fieldset className="rating">
                <Rate disabled defaultValue={4} />
                <span className="pull-right toRight brands">(55)</span>
              </fieldset>
            </li>
            <li>
              <fieldset className="rating">
                <Rate disabled defaultValue={3} />
                <span className="pull-right toRight brands">(55)</span>
              </fieldset>
            </li>
            <li>
              <fieldset className="rating">
                <Rate disabled defaultValue={2} />
                <span className="pull-right toRight brands">(55)</span>
              </fieldset>
            </li>
            <li>
              <fieldset className="rating">
                <Rate disabled defaultValue={1} />
                <span className="pull-right toRight brands">(55)</span>
              </fieldset>
            </li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default RatingFilter;
