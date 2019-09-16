import React from 'react';
import cc from 'classcat';

export default function Controls() {
  return (
    <div className={'controls'}>
      <div className={cc(['button', 'text'])}>Button 1</div>
      <div className={cc(['button', 'text'])}>Button 2</div>
      <div className={cc(['button', 'text'])}>Button 3</div>
      <div className={cc(['button', 'text'])}>Button 4</div>
      <div className={cc(['button', 'text'])}>Button 5</div>
      <div className={cc(['button', 'text'])}>Button 6</div>
    </div>
  );
}
