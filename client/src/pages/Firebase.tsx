import { AuthPage, UserInfo } from '../components/AuthPage'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../store/slices/global';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, Auth, User } from 'firebase/auth';
import toast from 'react-hot-toast';

import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

const auth: Auth = getAuth();

export const Firebase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupUser = async ({name, email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    
    try {
      const res: any = await createUserWithEmailAndPassword(auth, email as string, password);
      const access_token = await res.user.getIdToken();

      await updateProfile(auth.currentUser as User, { displayName: name })

      console.log({access_token})
      localStorage.setItem('access_token', access_token || '');
      navigate('/home');
    } catch (error) {
      toast.dismiss();
      toast.error((error as Error).message || 'Something went wrong!');
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  const loginUser = async ({email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    
    try {
      const res: any = await signInWithEmailAndPassword(auth, email as string, password);
      const access_token = await res.user.getIdToken();

      localStorage.setItem('access_token', access_token || '');
      navigate('/home');
    } catch (error) {
      toast.dismiss();
      toast.error((error as Error).message || 'Something went wrong!');
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  console.log({auth})
  return (
    <AuthPage title="Firebase Login" signup={signupUser} login={loginUser} />
  )
}
