import SignoutButton from "@/components/SignoutButton";
import { auth } from "@/lib/auth"
import { headers } from "next/headers";

const Profile = async () => {
    const session = await auth.api.getSession({
        headers:await headers()
    });
    if(!session) <p className="text-destructive text-center px-8 py-6">Unauthorized</p>
  return (
    <div className='px-8 py-16 container mx-auto max-w-lg space-y-8'>
        <div className='space-y-8'>
            <h1 className='font-bold text-lg'>
                Profile
            </h1>
        </div>
        <SignoutButton/>
        <pre className="text-sm overflow-clip">
            {JSON.stringify(session,null,2)}
        </pre>
    </div>
  )
}

export default Profile