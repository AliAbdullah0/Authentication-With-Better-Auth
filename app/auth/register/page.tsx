import RegisterForm from '@/components/RegisterForm'
import ReturnButton from '@/components/ReturnButton'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className='px-8 py-16 container mx-auto max-w-lg space-y-8'>
        <div className='space-y-8'>
        <ReturnButton href='/' label='Home'/>
            <h1 className='font-bold text-lg'>
                Register
            </h1>
            <RegisterForm/>
            <p className="text-muted-foreground text-sm">
              Already have an account ? {" "} <Link href={'/auth/login'} className='text-foreground'>Login</Link>
            </p>
        </div>
    </div>
  )
}

export default Register