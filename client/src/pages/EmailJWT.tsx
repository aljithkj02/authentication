import { useNavigate } from "react-router-dom"
import { AuthPage, UserInfo } from "../components/AuthPage"
import { loginUserJwt, signupUserJwt } from "../services/email-jwt"
import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/slices/global";

export const EmailJWT = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupUser = async ({name, email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    const res = await signupUserJwt({name, email, password}); 

    dispatch(setIsLoading(false));
    if (res?.status) {
      navigate('/home');
    }
  }

  const loginUser = async ({name, email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    const res = await loginUserJwt({name, email, password});
    
    dispatch(setIsLoading(false));
    if (res?.status) {
      navigate('/home');
    }
  }

  return (
    <AuthPage title="Email - JWT" signup={signupUser} login={loginUser} />
  )
}
