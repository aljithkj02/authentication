import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Toaster } from "react-hot-toast"
import { Loading } from "../components/atoms/Loading"

export const Layout = () => {
  const loading = false;
  return (
    <div className="select-none">
        <Navbar />
        <div className="pt-14">
            <Outlet />
        </div>
        <Toaster />
        { loading && <Loading /> }
    </div>
  )
}
