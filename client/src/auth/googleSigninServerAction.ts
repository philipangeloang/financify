import { signIn } from "./auth"

export const handleGoogleSignin = async () => {
    try {
        await signIn("google", {redirectTo: "/dashboard"})
    } catch (error) {
        throw error;
    }
} 