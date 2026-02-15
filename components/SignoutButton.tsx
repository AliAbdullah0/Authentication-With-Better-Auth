"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { signOut } from "@/lib/auth-client"
import { toast } from "sonner"

const SignoutButton = () => {
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
                }
            }
        })
    }
  return (
    <Button onClick={handleSignout} size={'sm'} variant={'destructive'}>Sign Out</Button>
  )
}

export default SignoutButton