import os from 'os'
import React from 'react'

import SideBar from './SideBar'
import TitleBar from './TitleBar'

class UI extends React.Component {
  render (): React.ReactElement {
    return (
      <div className='flex flex-row w-full h-screen'>
        <SideBar />
        <div className='w-full h-full'>
          {os.platform() === 'win32' && <TitleBar />}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default UI
