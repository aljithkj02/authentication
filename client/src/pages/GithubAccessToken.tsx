import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import toast from "react-hot-toast";
import { verifyAccessToken } from "../services/sso";

export const GithubAccessToken = () => {
    const [searchParam] = useSearchParams();
    
    const access_token = searchParam.get('access_token');
    const navigate = useNavigate();

    useEffect(() => {
        verifyToken();
    }, [])

    const verifyToken = async () => {
        const res = await verifyAccessToken(access_token || '');
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
