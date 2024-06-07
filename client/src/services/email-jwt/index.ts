import toast from "react-hot-toast";
import { UserInfo } from "../../components/AuthPage";
import { AuthResponse } from "../../types/intex";

const API = import.meta.env.VITE_BACKEND_URL;

export const signupUserJwt = async ({name, email, password}: UserInfo) => {
    try {
        const res = await fetch(API + '/email-jwt/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })

        const json: AuthResponse = await res.json();

        if (!json.status) {
            toast.dismiss();
            toast.error(json.message);
        } else {
            localStorage.setItem('access_token', json.access_token);
            toast.success(json.message);
        }
        return json;
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
    }
}

export const loginUserJwt = async ({email, password}: UserInfo) => {
    try {
        const res = await fetch(API + '/email-jwt/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json: AuthResponse = await res.json();

        if (!json.status) {
            toast.dismiss();
            toast.error(json.message);
        } else {
            localStorage.setItem('access_token', json.access_token);
            toast.success(json.message);
        }
        return json;
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
    }
}