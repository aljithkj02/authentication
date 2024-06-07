import { Link, useLocation } from "react-router-dom"
import { Loading } from "./atoms/Loading";
import { useSelector } from "react-redux";
import { IRootState } from "../types/intex";

export const Navbar = () => {
    const {pathname} = useLocation();
    const isLoading = useSelector((state: IRootState) => state.global.isLoading);

    return (
        <nav className={`flex py-4 px-10 items-center fixed w-full bg-blue-500 gap-8 ${pathname === '/home' ? 'justify-between': 'justify-end'}`}>
            { pathname !== '/home' && (
                <>
                    <Link className="text-lg text-white hover:text-gray-300 transition-all duration-300" to='/auth-email-jwt'>Email-JWT</Link>
                    <Link className="text-lg text-white hover:text-gray-300 transition-all duration-300" to='/auth-email-session'>Email-SESSION</Link>
                    <Link className="text-lg text-white hover:text-gray-300 transition-all duration-300" to='/auth-sso'>SSO</Link>
                    <Link className="text-lg text-white hover:text-gray-300 transition-all duration-300" to='/auth-supabase'>Supabase</Link>
                    <Link className="text-lg text-white hover:text-gray-300 transition-all duration-300" to='/auth-firebase'>Firebase</Link>
                </> 
            )}

            { pathname === '/home' && (
                <>
                    <p className="text-lg text-white">Products</p>
                    <Link className="text-lg text-white bg-red-500 px-4 py-1 rounded-md" to="/">Logout</Link>
                </>
            )}

            { isLoading && <Loading /> }
        </nav>
    )
}
