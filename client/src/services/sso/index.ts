import toast from "react-hot-toast";
const API = import.meta.env.VITE_BACKEND_URL;

export const loginWithGoogle = async () => {
    try {
        const res = await fetch(API + '/auth/google')

        const json = await res.json();
        
        console.log({json})
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
    }
}