const list: React.ReactElement[] = Array.from(Array(100).keys()).map((i) => {return (<div>{i}</div>)});

import GridItem from './library/GridItem';

function GridLibrary (): React.ReactElement {
  return (
    <div className='game-grid p-4'>
      {list.map(e =>
        <GridItem>
          {e}
        </GridItem>
      )}
    </div>
  )
}

export default GridLibrary