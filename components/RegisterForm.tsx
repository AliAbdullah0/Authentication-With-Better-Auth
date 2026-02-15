"use client"
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { signUp } from '@/lib/auth-client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const router = useRouter()
    const [isPending,setIsPending] = useState(false)
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        if(!name) return toast.error("Name is required")
        if(!email) return toast.error("Email is required")
        if(!password) return toast.error("Password is required")

        try {
            await signUp.email({
                name,
                email,
                password
            },{
                onRequest:()=>{
                    setIsPending(true)
                },
                onResponse:()=>{
                    setIsPending(false)
                },
                onError:(ctx)=>{
                    toast.error(ctx.error.message)
                },
                onSuccess:()=>{
                    router.push("/auth/login")
                    toast.success("Registered and Signed In.")
                }
            })
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
  return (
    <form onSubmit={handleSubmit} className='max-w-sm w-full space-y-4'>
        <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input name='name' id='name' type='text' placeholder='Name' />
        </div>
        <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input name='email' id='email' type='email' placeholder='Email' />
        </div>
        <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input name='password' id='password' type='password' placeholder='Password' />
        </div>  
        <Button className='w-full' disabled={isPending} type='submit'>Register</Button>
    </form>
  )
}

export default RegisterForm