import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const Layout = () => {
  return (
    <div>
        <Navbar />
        <div className="py-5 px-10 pt-20">
            <Outlet />
        </div>
    </div>
  )
}
