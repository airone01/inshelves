import Link from 'next/link'

import LoginForm from '../../components/UI/LoginForm'

function Account (): React.ReactElement {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <div className='flex flex-col items-center transform -translate-y-5'>
        <h1 className='pb-4 text-4xl text-center'>Login</h1>
        <LoginForm messageTitle='LOGIN 🔓' />
        <div className='relative top-10'>
          <div className='flex flex-col justify-center'>
            <div className='transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300'><Link href='#'>Forgot password ?</Link></div>
            <div className='transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300'><Link href='/account/register'>No account ?</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
