"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { signOut } from "@/lib/auth-client"
import { toast } from "sonner"
import { useState } from "react"

const SignoutButton = () => {
    const [isPending,setIsPending] = useState(false)
    const router = useRouter()
    const handleSignout = async ()=>{
        await signOut({
            fetchOptions:{
                onError:(ctx)=>{
                    toast.error(ctx.error.message)
                },
                onSuccess:()=>{
                    router.push("/auth/login")
                    toast.message("Signed Out!")
                },
                onRequest:()=>{
                    setIsPending(true)
                },
                onResponse:()=>{
                    toast.success("Logged Out successfully.")
                    setIsPending(true)
                }
            }
        })
    }
  return (
    <Button onClick={handleSignout} disabled={isPending} size={'sm'} variant={'destructive'}>Sign Out</Button>
  )
}

export default SignoutButton