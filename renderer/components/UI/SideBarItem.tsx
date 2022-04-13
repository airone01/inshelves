import Link from 'next/link'
import React from 'react'

class SideBarItem extends React.Component<{ svg: React.ReactElement, link: string, red?: true }, {}> {
  private readonly link: string
  private readonly svg: React.ReactElement
  private readonly color: 'group-hover:bg-blue-500' | 'group-hover:bg-red-500'

  constructor (props: any) {
    super(props)
    this.link = this.props.link
    this.svg = this.props.svg
    if (this.props.red ?? false) this.color = 'group-hover:bg-red-500'
    else this.color = 'group-hover:bg-blue-500'
  }

  public render (): React.ReactElement {
    return (
      <Link href={this.link}>
        <li className='sidebar-item group relative h-12 w-full'>
          <div className={'absolute top-0 left-0 h-full w-full filter blur-sm smooth duration-300 ' + this.color} />
          <button className={'absolute top-0 left-0 flex justify-center items-center h-full w-full p-3 title-button bg-gray-800 rounded-md duration-300 ' + this.color}>
            {this.svg}
          </button>
        </li>
      </Link>
    )
  }
}

export default SideBarItem
