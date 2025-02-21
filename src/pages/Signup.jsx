const Signup = () => {
  return (
    <div className='m-auto py-40 md:py-80 lg:py-35'>
    <div className='w-8/12 md:w-7/12 lg:w-3/12 rounded-2xl shadow-xl bg-white mx-auto py-4'>
      <h1 className='text-center pt-4 font-bold text-fuchsia-500'>SIGN UP</h1>
      <div className='mx-8 lg:mx-12 my-6'>
      <input type="email" placeholder='email' className='border-b-1 border-sky-500 w-full' /><br /><br />
      <input type="text" placeholder='Username' className='border-b-1 border-sky-500 w-full' /><br /><br />
      <input type="password" placeholder='Password' className='border-b-1 border-sky-500 w-full' /><br /><br /> 
      <input type="password" placeholder='Confirm password' className='border-b-1 border-sky-500 w-full' /><br /><br />
      </div>
      <input type="submit" className='bg-fuchsia-500 ml-18 md:ml-35 my-4 p-2 rounded-lg text-white hover:bg-sky-500' />
      
      </div>
    </div>
  )
}

export default Signup
