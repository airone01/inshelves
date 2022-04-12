import Link from 'next/link'
import React from 'react'

class SideBarItem extends React.Component<{ item: { svg: React.ReactElement, link: string }}, {}> {
  private readonly link: string
  private readonly svg: React.ReactElement

  constructor (props: any) {
    super(props)
    this.link = this.props.item.link
    this.svg = this.props.item.svg
  }

  public render (): React.ReactElement {
    return (
      <Link href={this.link}>
        <li className='sidebar-item group relative h-12 w-full'>
          <div className='absolute top-0 left-0 group-hover:bg-blue-500 h-full w-full filter blur-sm smooth duration-300' />
          <button className='absolute top-0 left-0 flex justify-center items-center h-full w-full p-3 title-button bg-gray-800 group-hover:bg-blue-500 rounded-md duration-300'>
            {this.svg}
          </button>
        </li>
      </Link>
    )
  }
}

export default SideBarItem
