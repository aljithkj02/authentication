const API = import.meta.env.VITE_BACKEND_URL;

export const SSO = () => {

  return (
    <div className='flex w-full h-[92.5vh] bg-gray-300 items-center justify-center'>
      <div className='w-[35%] p-10 bg-white rounded-md'>
        
        <a href={API + '/auth/google'}>
          <div className='flex items-center justify-center gap-1 cursor-pointer'>
            <div className='w-14'>
              <img src="https://static.vecteezy.com/system/resources/previews/022/484/509/large_2x/google-lens-icon-logo-symbol-free-png.png" 
                alt="google" className='w-full h-full'
              />
            </div>
            <p className='text-xl hover:text-blue-600 duration-300 transition-all'>Sign in with Google</p>
          </div>
        </a>
      </div>
    </div>
  )
}
