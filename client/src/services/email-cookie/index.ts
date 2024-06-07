import toast from "react-hot-toast";
import { UserInfo } from "../../components/AuthPage";
import { AuthResponse } from "../../types/intex";

const API = import.meta.env.VITE_BACKEND_URL;

export const signupUserCookie = async ({name, email, password}: UserInfo) => {
    try {
        const res = await fetch(API + '/email-cookie/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password}),
            credentials: "include"
        })

        const json: AuthResponse = await res.json();

        if (!json.status) {
            toast.dismiss();
            toast.error(json.message);
        } else {
            toast.success(json.message);
        }
        return json;
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
    }
}

export const loginUserCookie = async ({email, password}: UserInfo) => {
    try {
        const res = await fetch(API + '/email-cookie/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password}),
            credentials: "include"
        })

        const json: AuthResponse = await res.json();

        if (!json.status) {
            toast.dismiss();
            toast.error(json.message);
        } else {
            toast.success(json.message);
        }
        return json;
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
    }
}


export const logoutUserCookie = async () => {
    try {
        const res = await fetch(API + '/email-cookie/logout', {
            credentials: "include"
        });

        const json: AuthResponse = await res.json();

        if (!json.status) {
            toast.dismiss();
            toast.error(json.message);
        } else {
            toast.success(json.message);
        }
        return json;
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
    }
}