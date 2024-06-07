import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./private-router/Layout"
import { Firebase } from "./pages/Firebase"
import { Supabase } from "./pages/Supabase"
import { SSO } from "./pages/SSO"
import { EmailSession } from "./pages/EmailSession"
import { EmailJWT } from "./pages/EmailJWT"
import { Home } from "./pages/Home"


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/auth-email-jwt',
        element: <EmailJWT />
      },
      {
        path: '/auth-email-session',
        element: <EmailSession />
      },
      {
        path: '/auth-sso',
        element: <SSO />
      },
      {
        path: '/auth-supabase',
        element: <Supabase />
      },
      {
        path: '/auth-firebase',
        element: <Firebase />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
