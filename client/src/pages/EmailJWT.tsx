import { useNavigate } from "react-router-dom"
import { AuthPage, UserInfo } from "../components/AuthPage"
import { loginUserJwt, signupUserJwt } from "../services/email-jwt"

export const EmailJWT = () => {

  const navigate = useNavigate();

  const signupUser = async ({name, email, password}: UserInfo) => {
    const res = await signupUserJwt({name, email, password});
    
    if (res?.status) {
      navigate('/home');
    }
  }

  const loginUser = async ({name, email, password}: UserInfo) => {
    const res = await loginUserJwt({name, email, password});
    
    if (res?.status) {
      navigate('/home');
    }
  }

  return (
    <AuthPage title="Email - JWT" signup={signupUser} login={loginUser} />
  )
}
