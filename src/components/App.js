import React from 'react';

import Title from './Title';
import Board from './Board';
import Controls from './Controls';

function App() {
  return (
    <div className='App'>
      <div className='boardDiv'>
        <Title />
        <Board />
      </div>
      <Controls />
    </div>
  );
}

export default App;
