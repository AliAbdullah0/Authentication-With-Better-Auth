import RegisterForm from '@/components/RegisterForm'
import React from 'react'

const Register = () => {
  return (
    <div className='px-8 py-16 container mx-auto max-w-lg space-y-8'>
        <div className='space-y-8'>
            <h1 className='font-bold text-lg'>
                Register
            </h1>
            <RegisterForm/>
        </div>
    </div>
  )
}

export default Register