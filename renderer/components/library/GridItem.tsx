import React from 'react';

class GridItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='game-item relative'>
        <div className='absolute top-0 left-0 bg-red-500 rounded-lg w-full h-full filter blur'>
        </div>
        <div className='absolute top-0 left-0 bg-transparent rounded-lg w-full h-full p-2'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GridItem;
