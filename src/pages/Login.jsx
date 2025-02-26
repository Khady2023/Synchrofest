
const Login = () => {
  return (
    <div className='m-auto py-40 md:py-80 lg:py-35'>
      <div className='w-8/12 md:w-7/12 lg:w-3/12 m-auto rounded-2xl shadow-xl bg-white  py-4'>
      <h1 className='text-center pt-4 font-bold text-fuchsia-500'>SIGN IN</h1>
      <div className='mx-8 lg:mx-12 my-6'>
      <input type="text" placeholder='Username' className='border-b-1 border-sky-500 w-full' /><br /><br />
      <input type="text" placeholder='Password' className='border-b-1 border-sky-500 w-full' />
      </div>
      <input type="submit" className='bg-fuchsia-500 ml-18 md:ml-35 my-4 p-2 rounded-lg text-white hover:bg-sky-500' />
      <p className='mx-4 md:mx-8 lg:mx-12 text-[12px] '>Don&apos;t have an account? <span className='text-fuchsia-500 hover:text-sky-500'><button><a href='/signup'>Sign up</a></button></span></p>
    </div>
     
    </div>
  )
}

export default Login
