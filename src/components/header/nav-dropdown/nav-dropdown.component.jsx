import React, { Component } from 'react';

import './nav-dropdown.styles.scss';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const { credentials, image, name, subName, children } = this.props;
    const { isToggleOn } = this.state;
    const classDropdownMenu =
      'dropdown-menu' +
      (credentials ? ' credentials' : '') +
      (isToggleOn ? ' show' : '');
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => {
            this.showDropdown(e);
          }}
        >
          {image ? (
            <img src={image} className="float-right menuicon" alt="image" />
          ) : null}

          {name}
          <br />
          {subName ? subName : null}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {children}
        </div>
      </li>
    );
  }
}

export default NavDropdown;
