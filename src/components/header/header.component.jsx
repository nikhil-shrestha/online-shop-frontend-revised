import React from 'react';

import HeaderItems from './header-items/header-items.component';
import HeaderContents from './header-content/header-content.component';

function Header() {
  return (
    <React.Fragment>
      <HeaderItems />
      <HeaderContents />
    </React.Fragment>
  );
}

export default Header;
