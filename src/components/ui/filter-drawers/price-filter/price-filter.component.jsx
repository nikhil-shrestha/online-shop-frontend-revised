import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { Slider, InputNumber } from 'antd';

import './price-filter.styles.scss';

class PriceFilter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, minValue: 20, maxValue: 50 };
  }

  onChange = value => {
    this.setState({
      minValue: value[0],
      maxValue: value[1]
    });
  };

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const { collapse, minValue, maxValue } = this.state;
    return (
      <div className="filterprice">
        <div onClick={this.toggle}>
          <h4>
            <label
              className={`title searchTitle ${collapse ? 'collapsed' : ''}`}
            >
              Price
            </label>
          </h4>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <div className="row">
            <div className="col-sm-6">
              <InputNumber
                className="pull-left customInput"
                style={{ marginLeft: 16 }}
                value={minValue}
                onChange={this.onChange}
              />
            </div>
            <div className="col-sm-6">
              <InputNumber
                className="customInput"
                style={{ marginLeft: 16 }}
                value={maxValue}
                onChange={this.onAfterChange}
              />
            </div>
          </div>
          <div className="spaceSlider">
            <Slider
              range
              className="span2"
              defaultValue={[20, 50]}
              onChange={this.onChange}
            />
            <br />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default PriceFilter;
