import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

import './types-filter.styles.scss';

class TypesFilter extends Component {
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
      <div className="filterbrand">
        <div onClick={this.toggle}>
          <h4>
            <label
              className={`title searchTitle ${collapse ? 'collapsed' : ''}`}
            >
              Types
            </label>
          </h4>
        </div>
        <Collapse isOpen={collapse}>
          <input
            type="text"
            name=""
            className="customInput"
            placeholder="Search"
          />
          <ul className="list-unstyled">
            <li>
              <div className="checkbox brands">
                <input id="check1" type="checkbox" className="styled" checked />
                <label for="check1">Other</label>
                <span className="pull-right toRight">(46)</span>
              </div>
            </li>
            <li>
              <div className="checkbox brands">
                <input id="check2" type="checkbox" className="styled" checked />
                <label for="check2">Hallmark</label>
                <span className="pull-right toRight">(1)</span>
              </div>
            </li>
            <li>
              <div className="checkbox brands">
                <input id="check3" type="checkbox" className="styled" checked />
                <label for="check3">New Lifestyle</label>
                <span className="pull-right toRight">(154)</span>
              </div>
            </li>
            <li>
              <div className="checkbox brands">
                <input id="check4" type="checkbox" className="styled" checked />
                <label for="check4">Maya bedding</label>
                <span className="pull-right toRight">(55)</span>
              </div>
            </li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default TypesFilter;
