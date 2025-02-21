/* eslint-disable react/prop-types */
const Recommend = ({title}) => {

    const pica = "/pic1.jpeg";
    const picb = "/pic2.jpeg";
    const picc = "/pic3.jpeg";
    const picd = "/pic4.jpeg";
    const pice = "/pic5.jpeg";
    const picf = "/pic6.jpeg";
    const picg = "/pic7.jpeg";
    const pich = "/pic8.jpeg";



  return (
    
    <div className='my-10 mt-16'>
        <h1 className='font-bold text-sm md:text-xl lg:text-2xl font-verdana'>{title}</h1>
        <div className='grid sm:grid-cols-1 gap- md:grid-cols-2 lg:grid-cols-4 space-y-6 md:space-y-10 my-6'>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12 ' src={pica} alt="" /><div className='flex space-x-5'><p>Taylor Swift</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12' src={picb} alt="" /><div className='flex space-x-5'><p>Pop music</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12' src={picc} alt="" /><div className='flex space-x-5'><p>Bruno Mars</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12' src={picd} alt="" /><div className='flex space-x-5'><p>Afro beat</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12' src={pice} alt="" /><div className='flex space-x-5'><p>Jazz</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12' src={picf} alt="" /><div className='flex space-x-5'><p>Tems</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12' src={picg} alt="" /><div className='flex space-x-5'><p>Ed sheeran</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
      <div><img className='rounded-xl w-10/12 h-50 lg:h-50 md:w-10/12' src={pich} alt="" /><div className='flex space-x-5'><p>Drake</p><p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'><a href='/bookseat'>Book seat</a></p></div></div>
    </div>
    </div>
  )
}

export default Recommend
