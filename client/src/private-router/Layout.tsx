import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const Layout = () => {
  return (
    <div className="select-none">
        <Navbar />
        <div className="pt-14">
            <Outlet />
        </div>
    </div>
  )
}
