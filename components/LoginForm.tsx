"use client"
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { signIn } from '@/lib/auth-client'

const LoginForm = () => {

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        if(!email) return toast.error("Email is required")
        if(!password) return toast.error("Password is required")

        try {
            await signIn.email({
                email,
                password
            },{
                onRequest:()=>{},
                onResponse:()=>{},
                onError:(ctx)=>{
                    toast.error(ctx.error.message)
                },
                onSuccess:()=>{
                    toast.message("Logged in.")
                }
            })
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
  return (
    <form onSubmit={handleSubmit} className='max-w-sm w-full space-y-4'>
        <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input name='email' id='email' type='email' placeholder='Email' />
        </div>
        <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input name='password' id='password' type='password' placeholder='Password' />
        </div>  
        <Button className='w-full' type='submit'>Login</Button>
    </form>
  )
}

export default LoginForm