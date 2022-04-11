import { v4 as uuidv4 } from 'uuid';

const list: { img: string }[] = [...Array(100)];
list[0] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c6a8488de86eddf87c84edf4136a1126.png' };
list[1] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/057b1cfba313958551a8afa2c3e75429.png' };
list[2] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/957768b9dbbf150bc34bc78093b57467.png' };

import GridItem from './library/GridItem';

function GridLibrary (): React.ReactElement {
  return (
    <div className='game-grid p-1'>
      {list.map(e =>
        <GridItem key={uuidv4()}>
          <img src={e ? e.img ? e.img : '' : ''}></img>
        </GridItem>
      )}
    </div>
  )
}

export default GridLibrary