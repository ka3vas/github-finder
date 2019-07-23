import React, { Fragment } from 'react';
import spiner from './spinner.gif';

const Spiner = () => (
  <Fragment>
    <img
      src={spiner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spiner;
