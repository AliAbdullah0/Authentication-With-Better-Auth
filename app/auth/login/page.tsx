import LoginForm from '@/components/LoginForm'
import ReturnButton from '@/components/ReturnButton'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='px-8 py-16 container mx-auto max-w-lg space-y-8'>
        <div className='space-y-8'>
            <ReturnButton href='/' label='Home'/>
            <h1 className='font-bold text-lg'>
                Login
            </h1>
            <LoginForm/>
            <p className="text-muted-foreground text-sm">
              Don't have an account ? {" "} <Link href={'/auth/register'} className='text-foreground'>Register</Link>
            </p>
        </div>
    </div>
  )
}

export default Login