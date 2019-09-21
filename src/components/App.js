import React from 'react';

import Title from './Title';
import Board from './Board';
import Controls from './Controls';

function App() {
  return (
    <div className='App'>
      <Title />
      <div className='boardDiv'>
        <Board />
        <Controls />
      </div>
    </div>
  );
}

export default App;
