import { ipcRenderer } from 'electron'
import React from 'react'

function TitleBar (): React.ReactElement {
  return (
    <div className='w-full h-8 bg-transparent drag flex justify-center items-center'>
      <div>Inshelves</div>
      <div className='flex flex-row items-center h-8 no-drag absolute right-0'>
        <button onClick={(e) => { e.preventDefault(); ipcRenderer.send('win_min') }} className='w-full h-full max-h-full p-2 px-4 hover:bg-gray-700 title-button'>
          <svg className='' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' shapeRendering='geometricPrecision' textRendering='geometricPrecision' width='10px' height='10px'>
            <line x1='-5' y1='5' x2='5' y2='5' transform='translate(5 -0.46875)' fill='none' stroke='#fff' />
          </svg>
        </button>
        <button onClick={(e) => { e.preventDefault(); ipcRenderer.send('win_max') }} className='w-full h-full max-h-full p-2 px-4 hover:bg-gray-700 title-button'>
          <svg className='' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' shapeRendering='geometricPrecision' textRendering='geometricPrecision' width='10px' height='10px'>
            <line x1='-5' y1='0' x2='5' y2='0' transform='translate(5 0.46875)' fill='none' stroke='#fff' />
            <line x1='-5' y1='0' x2='5' y2='0' transform='translate(5 9.5)' fill='none' stroke='#fff' />
            <line x1='-5' y1='0' x2='5' y2='0' transform='matrix(0-1 1 0 9.5 5)' fill='none' stroke='#fff' />
            <line x1='-5' y1='0' x2='5' y2='0' transform='matrix(0-1 1 0 0.5 5)' fill='none' stroke='#fff' />
          </svg>
        </button>
        <button onClick={(e) => { e.preventDefault(); ipcRenderer.send('win_close') }} className='w-full h-full max-h-full p-2 px-4 hover:bg-red-600 title-button'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 32 32' width='16px' height='16px'>
            <path fill='none' stroke='#fff' strokeMiterlimit='10' strokeWidth='2' d='M6.5 25.5L25.5 6.5M6.5 6.5L25.5 25.5' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TitleBar