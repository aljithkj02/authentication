import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { appStore } from "../store"

export const Layout = () => {
  return (
    <div className="select-none">
      <Provider store={appStore}>
        <Navbar />
        <div className="pt-14">
            <Outlet />
        </div>
        <Toaster />
      </Provider>
    </div>
  )
}
