import Link from 'next/link'
import React from 'react'

import { Game } from '../../utils/Game'

class GridItem extends React.Component<{ game: Game }, {}> {
  private readonly game: Game

  constructor (props: { game: Game }) {
    super(props)
    this.game = props.game
  }

  public render (): React.ReactElement {
    return (
      <Link href={`/game/${this.game.id}`}>
        <a className='game-item relative group max-h-72 cursor-pointer'>
          <div className='relative w-full h-screen top-4 left-4 rounded-lg transition duration-400 filter blur-sm overflow-visible' style={{ backgroundColor: this.game.color }} />
          <div className='absolute w-full h-full top-4 left-4 rounded-lg transition duration-400 p-2 bg-gray-700 bg-cover' style={{ backgroundImage: `url(${this.game.img})` }} />
        </a>
      </Link>
    )
  }
}

export default GridItem
