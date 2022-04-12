import Link from 'next/link'
import React from 'react'

function p404 (): React.ReactElement {
  return (
    <div className='flex flex-col justify-center items-center h-screen whitespace-nowrap overflow-hidden'>
      <h1 className='text-7xl font-bold text-gray-800 z-10'>Sheeeeesh...</h1>
      <h2 className='text-3xl font-semibold text-gray-800 z-10'>There was an error in the app 🤔</h2>
      <h4 className='text-lg font-semibold text-gray-800 z-10 p-4'>You can go back by <Link href='/grid'><span className='underline cursor-pointer'>clicking here</span></Link>.</h4>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <h4 className='text-9xl font-semibold text-white opacity-10 z-0 transform -translate-y-5 scale-150'>404</h4>
      </div>
    </div>
  )
}

export default p404
