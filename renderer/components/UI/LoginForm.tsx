import { ipcRenderer } from 'electron'
import React, { useState } from 'react'

function LoginForm (): React.ReactElement {
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')

  return (
    <form className='w-64' onSubmit={(e) => { e.preventDefault(); callback(email, passwd) }}>
      <div className='w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500'>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none' />
      </div>
      <div className='w-full transform border-b-2 mb-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500'>
        <input type='password' value={passwd} onChange={(e) => setPasswd(e.target.value)} placeholder='Password' className='w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none' />
      </div>
      <div className='flex flex-row justify-center'>
        <button className='transform rounded-md bg-indigo-600 py-2 px-1 font-bold duration-300 hover:bg-indigo-400'>OK</button>
      </div>
    </form>
  )
}

function callback (email: string, passwd: string): void {
  ipcRenderer.send('fb_register', email, passwd)
}

export default LoginForm
