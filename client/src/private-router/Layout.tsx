import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Toaster } from "react-hot-toast"

export const Layout = () => {
  return (
    <div className="select-none">
        <Navbar />
        <div className="pt-14">
            <Outlet />
        </div>
        <Toaster />
    </div>
  )
}
