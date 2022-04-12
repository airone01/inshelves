import React from 'react';

import Game from '../../utils/Game';

class GridItem extends React.Component<{ game: Game }, {}> {
  private game: Game;

  public render () {
    this.game = this.props.game;

    return (
      <div className='game-item relative group'>
        <div className='relative w-full h-screen top-4 left-4 rounded-lg transition duration-400 filter blur-sm overflow-visible' style={{ backgroundColor: this.game.color }} />
        <div className='absolute w-full h-full top-4 left-4 rounded-lg transition duration-400 p-2 bg-gray-700 bg-cover' style={{ backgroundImage: `url(${this.game.img})` }} />
      </div>
    )
  }
}

export default GridItem;
