import { v4 } from 'uuid'
import storage from 'electron-json-storage'

import Game from '../../utils/Game'
import GridItem from './GridItem'

const list: Game[] = [...Array(3)]
list[0] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c6a8488de86eddf87c84edf4136a1126.png', color: '#f60', name: 'CS: GO', id: v4().toString() }
list[1] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/057b1cfba313958551a8afa2c3e75429.png', color: '#d0f', name: 'Katana Zero', id: v4().toString() }
list[2] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/957768b9dbbf150bc34bc78093b57467.png', color: '#55f', name: 'Portal 2', id: v4().toString() }

storage.get('grid', (_error: any, data: any) => {
  if (isGameList(data)) {
    list.splice(0, list.length, ...data)
  }
})

function GridLibrary (): React.ReactElement {
  return (
    <div className='game-grid p-1'>
      {list.map(e =>
        <GridItem key={v4()} game={e} />
      )}
    </div>
  )
}

// function to check if the data is a game list
function isGameList (data: any): data is Game[] {
  return (
    typeof data === 'object' &&
    data !== null &&
    Array.isArray(data) &&
    data.every(e =>
      typeof e === 'object' &&
      e !== null &&
      'img' in e &&
      typeof e.img === 'string' &&
      'color' in e &&
      typeof e.color === 'string' &&
      'name' in e &&
      typeof e.name === 'string')
  )
}

export default GridLibrary
