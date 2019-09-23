import React from 'react';
import cc from 'classcat';

export default function Controls() {
  return (
    <div className={'controls'}>
      <div className={cc(['button', 'button1', 'text'])}>Button 1</div>
      <div className={cc(['button', 'button2', 'text'])}>Button 2</div>
      <div className={cc(['button', 'button3', 'text'])}>Button 3</div>
      <div className={cc(['button', 'button4', 'text'])}>Button 4</div>
      <div className={cc(['button', 'button5', 'text'])}>Button 5</div>
      <div className={cc(['button', 'button6', 'text'])}>Button 6</div>
    </div>
  );
}
