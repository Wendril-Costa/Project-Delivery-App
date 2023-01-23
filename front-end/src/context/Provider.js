import PropTypes from 'prop-types';
import React from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const contextValue = '';

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
