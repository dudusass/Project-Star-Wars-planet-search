import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);

  const value = {
    data,
    setData,
  };
  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
