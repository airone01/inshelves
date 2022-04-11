import { v4 as uuidv4 } from 'uuid';

const list: {}[] = [...Array(100)];

import GridItem from './library/GridItem';

function GridLibrary (): React.ReactElement {
  return (
    <div className='game-grid p-4'>
      {list.map(e =>
        <GridItem key={uuidv4()}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad error aut reprehenderit vitae fugit deserunt dignissimos eius sit. Deleniti consequuntur dolorem aperiam eveniet rem dolore tenetur voluptatem necessitatibus in.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, facere dolorum. Harum culpa numquam vitae sapiente minus eligendi ducimus odit repellendus, magnam doloribus architecto ipsum, dolores incidunt sit cum ad!
        </GridItem>
      )}
    </div>
  )
}

export default GridLibrary