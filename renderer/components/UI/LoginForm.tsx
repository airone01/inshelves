function LoginForm (): React.ReactElement {
  return (
    <div className='w-64'>
      <div className='w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500'>
        <input type='text' placeholder='Email or Username' className='w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none' />
      </div>
      <div className='w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500'>
        <input type='password' placeholder='Password' className='w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none' />
      </div>
    </div>
  )
}

export default LoginForm
