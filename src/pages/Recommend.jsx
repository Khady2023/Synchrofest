import React from 'react'

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
        <div className='grid grid-cols-1 gap- md:grid-cols-2 lg:grid-cols-4 space-y-6 md:space-y-10 my-6'>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={pica} alt="" /><p>Taylor Swift</p></div>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={picb} alt="" /><p>Pop music</p></div>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={picc} alt="" /><p>Bruno Mars</p></div>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={picd} alt="" /><p>Afro beat</p></div>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={pice} alt="" /><p>Jazz</p></div>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={picf} alt="" /><p>Romance</p></div>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={picg} alt="" /><p>Ed Sheeran</p></div>
      <div><img className='rounded-xl w-8/12 h-50 lg:h-60 md:w-10/12' src={pich} alt="" /><p>Drake</p></div>
    </div>
    </div>
  )
}

export default Recommend
