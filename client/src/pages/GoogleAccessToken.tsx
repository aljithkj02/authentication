import { useNavigate, useSearchParams } from "react-router-dom"
import { googleVerifyAccessToken } from "../services/sso";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const GoogleAccessToken = () => {
    const [searchParam] = useSearchParams();
    
    const access_token = searchParam.get('access_token');
    const navigate = useNavigate();

    useEffect(() => {
        verifyToken();
    }, [])

    const verifyToken = async () => {
        const res = await googleVerifyAccessToken(access_token || '');
        if (!res.status) {
            toast.dismiss();
            toast.error(res.message);
            navigate('/');
        } else {
            navigate('/home');
        }
    }

    return (
        <div>
            <p className="text-center">Verifying...</p>
        </div>
    )
}
