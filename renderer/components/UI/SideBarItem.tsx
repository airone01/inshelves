import Link from 'next/link'
import React from 'react'

type C = 'group-hover:bg-blue-500' | 'group-hover:bg-red-500' | 'group-hover:bg-yellow-500'

class SideBarItem extends React.Component<{ svg: React.ReactElement, link: string, color: C }, {}> {
  private readonly color: C

  constructor (props: any) {
    super(props)

    this.color = this.props.color
  }

  public render (): React.ReactElement {
    return (
      <Link href={this.props.link}>
        <li className='sidebar-item group relative h-12 w-full'>
          <div className={'absolute top-0 left-0 h-full w-full filter blur-sm smooth duration-300 ' + this.color} />
          <button className={'absolute top-0 left-0 flex justify-center items-center h-full w-full p-3 title-button bg-gray-800 rounded-md duration-300 ' + this.color}>
            {this.props.svg}
          </button>
        </li>
      </Link>
    )
  }
}

export default SideBarItem
