import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

import './color-filter.styles.scss';

class ColorFilter extends Component {
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
      <div className="filtercolor">
        <div onClick={this.toggle}>
          <h4>
            <label
              className={`title searchTitle ${collapse ? 'collapsed' : ''}`}
            >
              Colors
            </label>
          </h4>
        </div>
        <Collapse isOpen={collapse}>
          <div className="colorswatches">
            <div className="one" />
            <div className="two" />
            <div className="three" />
            <div className="four" />
            <div className="five" />
            <div className="six" />
            <div className="seven" />
            <div className="eight" />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ColorFilter;
