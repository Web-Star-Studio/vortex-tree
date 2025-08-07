import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import {SignIn} from '@clerk/clerk-react'
import { Link,  } from "react-router-dom";


export default function SignInPage() {
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
            <Link
                className="absolute top-32 left-5 lg:left-40 text-white font-semibold rounded-full hover:underline"
                to={'/'}
            >
                <ArrowLeftCircle className="w-10 h-10" />
            </Link>
            
            <div className="lg:mt-60">
                <SignIn />
            </div>
        </div>
    )
}