import React from 'react';

// Эта функция умеет брать любой React-компонент  и устанавливать ему в качестве children
// заданную функцию.
const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

export default withChildFunction;
