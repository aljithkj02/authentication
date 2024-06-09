import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./private-router/Layout"
import { Firebase } from "./pages/Firebase"
import { Supabase } from "./pages/Supabase"
import { SSO } from "./pages/SSO"
import { EmailCookie } from "./pages/EmailCookie"
import { Home } from "./pages/Home"
import { EmailJWT } from "./pages/EmailJWT"
import { GoogleAccessToken } from "./pages/GoogleAccessToken"


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
        path: '/auth-email-cookie',
        element: <EmailCookie />
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
  },
  {
    path: '/auth/google',
    element: <GoogleAccessToken />
  }
])

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
