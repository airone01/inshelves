import React from 'react';

class GridItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='game-item bg-red-500 rounded-md'>
        <div className='bg-gray-600 rounded-md'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GridItem;
