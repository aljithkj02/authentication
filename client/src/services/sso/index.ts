import toast from "react-hot-toast";
const API = import.meta.env.VITE_BACKEND_URL;

export const verifyAccessToken = async (access_token: string) => {
    try {
        const res = await fetch(`${API}/auth/sso/get-token?access_token=${access_token}`, {credentials: 'include'})

        const json = await res.json();
        
        return json;
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
        return false;
    }
}