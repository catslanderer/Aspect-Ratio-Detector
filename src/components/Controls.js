import React from 'react';
import cc from 'classcat';

export default function Controls() {
  return (
    <div className={'controls'}>
      <div className={cc(['button', 'button1', 'small-text'])}>Button 1</div>
      <div className={cc(['button', 'button2', 'small-text'])}>Button 2</div>
      <div className={cc(['button', 'button3', 'small-text'])}>Button 3</div>
      <div className={cc(['button', 'button4', 'small-text'])}>Button 4</div>
      <div className={cc(['button', 'button5', 'small-text'])}>Button 5</div>
      <div className={cc(['button', 'button6', 'small-text'])}>Button 6</div>
    </div>
  );
}
