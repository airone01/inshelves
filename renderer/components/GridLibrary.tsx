import { v4 as uuidv4 } from 'uuid';

const list: {}[] = [...Array(100)];

import GridItem from './library/GridItem';

function GridLibrary (): React.ReactElement {
  return (
    <div className='game-grid p-4'>
      {list.map(e =>
        <GridItem key={uuidv4()}>lorem ipsum</GridItem>
      )}
    </div>
  )
}

export default GridLibrary