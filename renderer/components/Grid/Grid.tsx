import { v4 } from 'uuid'
import storage from 'electron-json-storage'

import { Game, isGameList } from '../../utils/Game'
import GridItem from './GridItem'

const list: Game[] = [...Array(3)]
list[0] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c6a8488de86eddf87c84edf4136a1126.png', color: '#f60', name: 'CS: GO', id: v4().toString(), timeStamp: Date.now() }
list[1] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/057b1cfba313958551a8afa2c3e75429.png', color: '#d0f', name: 'Katana Zero', id: v4().toString(), timeStamp: Date.now() }
list[2] = { img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/957768b9dbbf150bc34bc78093b57467.png', color: '#55f', name: 'Portal 2', id: v4().toString(), timeStamp: Date.now() }

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

export default GridLibrary
