import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Board() {
  return (
    <div className={'board'}>
      <p className={'medium-text'}>Viewport Aspect Ratio:</p>
      {useMediaQuery('(max-aspect-ratio:3/4)') && (
        <p className={'large-text'}>&lt; 3/4</p>
      )}
      {useMediaQuery('(min-aspect-ratio:3/4) and (max-aspect-ratio:4/3)') && (
        <p className={'large-text'}>&gt;= 3/4 and &lt; 4/3</p>
      )}
      {useMediaQuery('(min-aspect-ratio:4/3)') && (
        <p className={'large-text'}>&gt;= 4/3</p>
      )}
      <p className={'small-text'}>Board</p>
    </div>
  );
}
