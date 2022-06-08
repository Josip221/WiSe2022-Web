import React from 'react';
import Button from './Button';

function ButtonMenu({ measureHandler, resetHandler }) {
  return (
    <div className="mb-7">
      <Button title={'Measure'} onClick={measureHandler} />
      <Button title={'Reset'} onClick={resetHandler} />
    </div>
  );
}

export default ButtonMenu;
