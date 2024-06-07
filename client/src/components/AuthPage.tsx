import { ChangeEvent, useState } from "react"
import { Input } from "./atoms/Input";
import { useShowPassword } from "../hooks/useShowPassword";
import { Button } from "./atoms/Button";

interface IAuthPageProps {
  title: string;
}

export const AuthPage = ({title}: IAuthPageProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [type, toggler] = useShowPassword();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value
    })
  }

  const handleChangePage = () => {
    setIsLogin(!isLogin);
    setInfo({
      name: '',
      password: '',
      email: ''
    })
  }

  return (
    <div className="w-full h-[92.5vh] gap-2 flex flex-col justify-center items-center bg-gray-300">
      <p className="text-xl">{title}</p>
      <div className="w-[38%] bg-white rounded-lg px-10 py-10">
        <p className="text-center text-3xl font-medium">{isLogin ? 'Login': 'Signup'}</p>

        <form>
          <div className="my-3 flex flex-col gap-4">
            { !isLogin && <Input 
              label="Name"
              placeholder="Enter your name"
              type="text"
              value={info.name}
              name='name'
              handleChange={handleChange}
            /> }

            <Input 
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={info.email}
              name='email'
              handleChange={handleChange}
            />

            <Input 
              label="Password"
              placeholder="Enter your password"
              type={type}
              value={info.password}
              name='password'
              handleChange={handleChange}
              isPassword
              toggler={toggler}
            />

            <Button className="mt-3">
              {isLogin ? 'Login' : 'Signup'}
            </Button>

            <p className="text-center">
              {isLogin ? "Don't have an account?": "Already have an account?"}
              <span 
                onClick={handleChangePage}
                className="text-blue-600 cursor-pointer"
              >
                {isLogin ? ' Signup': ' Login'}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
