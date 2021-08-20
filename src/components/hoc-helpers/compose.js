import React from 'react';

const compose =
  (...funcs) =>
  (wrapped) => {
    return funcs.reduceRight(
      (wrappedAsAcc, fnAsCur) => fnAsCur(wrappedAsAcc),
      wrapped
    );
  };

export default compose;
