import os from 'os'
import React from 'react'

import SideBar from './SideBar'
import TitleBar from './TitleBar'

class UI extends React.Component {
  render (): React.ReactElement {
    return (
      <>
        <SideBar />
        <div className='w-full h-screen pl-12'>
          {os.platform() === 'win32' && <TitleBar />}
          {this.props.children}
        </div>
      </>
    )
  }
}

export default UI
