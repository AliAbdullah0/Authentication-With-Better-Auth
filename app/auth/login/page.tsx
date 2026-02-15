import LoginForm from '@/components/LoginForm'
import React from 'react'

const Login = () => {
  return (
    <div className='px-8 py-16 container mx-auto max-w-lg space-y-8'>
        <div className='space-y-8'>
            <h1 className='font-bold text-lg'>
                Login
            </h1>
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login