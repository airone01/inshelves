import React from 'react';

class GridItem extends React.Component {
  private color: string;

  constructor (props) {
    super(props);
    this.color = props.color;
  }

  render () {
    return (
      <div className='game-item relative group'>
        <div className='absolute w-full h-full top-4 left-4 rounded-lg transition-transform duration-400 filter blur-sm' style={{ backgroundColor: this.color ? this.color : 'black' }} />
        <div className='absolute w-full h-full top-4 left-4 rounded-lg transition-transform duration-400 p-2 bg-gray-700'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GridItem;
