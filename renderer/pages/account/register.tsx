import { ipcRenderer } from 'electron'
import Link from 'next/link'
import React from 'react'

import LoginForm from '../../components/UI/LoginForm'

function Account (): React.ReactElement {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <div className='flex flex-col items-center transform -translate-y-5'>
        <h1 className='pb-4 text-4xl text-center'>Login</h1>
        <LoginForm />
        <div className='relative top-11 transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300'><Link href='/account/login'>Have an account already ?</Link></div>
      </div>
    </div>
  )
}

export default Account
