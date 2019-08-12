import React from 'react';

import './with-spinner.styles.scss';

const withSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <div className="loader" />
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return Spinner;
};

export default withSpinner;
