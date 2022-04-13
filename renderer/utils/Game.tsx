interface Game {
  timeStamp: number

  id: string
  img: string
  color: string
  name: string

  // TODO: list of additional properties for Steam, Epic, etc. (ids, etc.)
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

export { type Game, isGameList }
