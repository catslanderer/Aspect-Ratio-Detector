import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Board() {
  const lessThan34 = useMediaQuery('(max-aspect-ratio:3/4)');
  const exactly34 = useMediaQuery('(aspect-ratio:3/4)');
  const between34and43 = useMediaQuery(
    '(min-aspect-ratio:3/4) and (max-aspect-ratio:4/3)'
  );
  const exactly43 = useMediaQuery('(aspect-ratio:4/3)');
  const greaterThan43 = useMediaQuery('(min-aspect-ratio:4/3)');
  return (
    <div className={'board'}>
      <p className={'medium-text'}>Viewport Aspect Ratio:</p>
      {lessThan34 && !exactly34 && <p className={'large-text'}>&lt; 3/4</p>}
      {between34and43 && !exactly43 && (
        <p className={'large-text'}>&gt;= 3/4 and &lt; 4/3</p>
      )}
      {greaterThan43 && <p className={'large-text'}>&gt;= 4/3</p>}
      <p className={'small-text'}>Board</p>
    </div>
  );
}
