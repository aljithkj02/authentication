import { useState } from "react"

export const EmailJWT = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="w-full h-90vh flex justify-center items-center bg-gray-300">
      <div className="w-[35%] bg-white rounded-lg">
        <p>{isLogin ? 'Login': 'Signup'}</p>
      </div>
    </div>
  )
}
