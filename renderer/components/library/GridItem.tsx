import React from 'react';

class GridItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='game-item bg-red-500 rounded-md'>
        {this.props.children}
      </div>
    )
  }
}

export default GridItem;
