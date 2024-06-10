import {createClient} from "@supabase/supabase-js"
import { AuthPage, UserInfo } from "../components/AuthPage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/slices/global";
import toast from "react-hot-toast";

const supabaseurl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonkey = import.meta.env.VITE_SUPA_BASE_KEY;

const supabase = createClient(supabaseurl, supabaseAnonkey)

export const Supabase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupUser = async ({name, email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    })

    dispatch(setIsLoading(false));

    if (res.error) {
      toast.dismiss();
      toast.error(res.error.message || 'Something went wrong!');
      return;
    }
    
    if (res.data) {
      localStorage.setItem('access_token', res.data.session?.access_token || '');
      navigate('/home');
    }
  }

  const loginUser = async ({email, password}: UserInfo) => {
    dispatch(setIsLoading(true));
    
    const res = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    dispatch(setIsLoading(false));

    if (res.error) {
      toast.dismiss();
      toast.error(res.error.message || 'Something went wrong!');
      return;
    }
    
    if (res.data) {
      localStorage.setItem('access_token', res.data.session?.access_token || '');
      navigate('/home');
    }
  }

  return (
    <AuthPage title="Supabase Login" signup={signupUser} login={loginUser} />
  )
}
