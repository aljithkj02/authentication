import toast from "react-hot-toast";
import { ProductsResponse } from "../../types/intex";

const API = import.meta.env.VITE_BACKEND_URL;

export const getProducts = async () => {
    try {
        const token = localStorage.getItem('access_token') || '';

        const res = await fetch(API + '/products', {
            headers: {
                authorization: `Bearer ${token}`
            },
            credentials: "include"
        })

        const json: ProductsResponse = await res.json();
        
        if (!json.status) {
            toast.dismiss();
            toast.error(json.message || '');
            localStorage.removeItem('access_token');
            return {
                status: false,
                data: []
            };
        }
        return json;
    } catch (error) {
        toast.dismiss();
        toast.error((error as Error).message)
    }
}