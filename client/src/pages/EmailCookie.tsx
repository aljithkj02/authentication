import { useNavigate } from 'react-router-dom';
import { AuthPage, UserInfo } from '../components/AuthPage'
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../store/slices/global';
import { loginUserCookie, signupUserCookie } from '../services/email-cookie';

export const EmailCookie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupUser = async ({name, email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    const res = await signupUserCookie({name, email, password}); 

    dispatch(setIsLoading(false));
    if (res?.status) {
      navigate('/home');
    }
  }

  const loginUser = async ({name, email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    const res = await loginUserCookie({name, email, password});
    
    dispatch(setIsLoading(false));
    if (res?.status) {
      navigate('/home');
    }
  }

  return (
    <AuthPage title='Email - Cookie' signup={signupUser} login={loginUser} />
  )
}
