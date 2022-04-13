import Link from 'next/link'

import LoginForm from '../../components/UI/LoginForm'

function Account (): React.ReactElement {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <div className='flex flex-col items-center transform -translate-y-5'>
        <h1 className='pb-4 text-4xl text-center'>Login</h1>
        <LoginForm />
        <div className='flex flex-row items-baseline justify-center pt-2'>
          <button className='transform rounded-md bg-indigo-600 py-2 mx-2 font-bold duration-300 hover:bg-indigo-400'>REGISTER 🎉</button>
        </div>
        <p className='relative top-10 text-center text-lg'>Already have an account? <span className='font-medium text-indigo-500 underline-offset-4 hover:underline'><Link href='/account/login'>Log in</Link></span></p>
      </div>
    </div>
  )
}

export default Account
