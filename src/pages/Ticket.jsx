import React from 'react'

const Ticket = () => {
  return (
    <div>
      <div className='w-screen h-35 sm:h-50 bg-gray-600'>
        <h1 className='font-bold text-white pt-25 sm:pt-30 pl-12 sm:pl-20 text-xl md:text-3xl'>Ticketing</h1>
      </div>
      <div className='lg:mx-20'>
      <div className='flex my-10 mx-4 sm:mx-10 text-[10px] md:text-[17px] lg:text-[15px] md:mx-10 space-x-4'>
            <select name="" id="" className='border border-sky-500 outline-none shadow-md px-2 py-1 rounded-xl hover:bg-sky-100'>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Choose location</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Paris</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>London</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Berlin</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Nigeria</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Amsterdam</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>South Africa</option>
            </select>

            <select name="" id="" className='border border-sky-500 outline-none shadow-md px-2 py-1 rounded-xl hover:bg-sky-100'>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>All date</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Custom date</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Today</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>This weekend</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>This month</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>Amsterdam</option>
                <option value="" className='text-[7px] md:text-[10px] lg:text-[12px]'>South Africa</option>
            </select>
        </div>
        <p className='mx-4 sm:mx-10 md:mx-12 text-[10px] md:text-[17px] lg:text-[15px]'><span className='font-semibold'>27 events</span> in all location</p>

        <div className=' stretch flex w-11/12 sm:w-10/12 lg:w-5/12 shadow-md mx-4 sm:mx-8 md:mx-10 my-4 rounded-xl py-2 px-4 md:px-7 text-[10px] md:text-[18px] bg-white'>
        <div className='flex flex-col'>
        <h2 className='font-semibold'>APR 01</h2>
        <p className='text-gray-600 font-semibold'>SAT</p>
        <p className='text-gray-600 font-semibold'>6:30PM</p>
        </div>
        <div className='w-[1px] h-9 md:h-15 bg-gray-700 my-1 md:my-2 mx-3 md:mx-6'></div>
        <div>
        <h2 className='font-semibold'>The 02, London, United Kingdom</h2>
        <p className='text-gray-600 font-semibold'>Usher</p>
        </div>
        <a className='px-2 sm:px-3 md:px-4 py-1 rounded-xl md:rounded-2xl ml-2   text-sky-600 hover:text-fuchsia-500'>See Tickets</a>
        </div>

        <div className='flex w-11/12 sm:w-10/12 lg:w-5/12 shadow-md mx-4 sm:mx-8 md:mx-10 my-4 rounded-xl py-2 px-4 md:px-7 text-[10px] md:text-[18px] bg-white'>
        <div className='flex flex-col'>
        <h2 className='font-semibold'>MAR 16</h2>
        <p className='text-gray-600 font-semibold'>TUE</p>
        <p className='text-gray-600 font-semibold'>6:30PM</p>
        </div>
        <div className='w-[1px] h-9 md:h-15 bg-gray-700 my-1 md:my-2 mx-3 md:mx-6'></div>
        <div>
        <h2 className='font-semibold'>Lovely, Berlin, Germany</h2>
        <p className='text-gray-600 font-semibold'>Billie Eilish</p>
        </div>
        <a className='px-2 sm:px-3 md:px-4 py-1 rounded-xl md:rounded-2xl ml-2   text-sky-600 hover:text-fuchsia-500 '>See Tickets</a>
        </div>

        <div className='flex w-11/12 sm:w-10/12 lg:w-5/12 shadow-md mx-4 sm:mx-8 md:mx-10 my-4 rounded-xl py-2 px-4 md:px-7 text-[10px] md:text-[18px] bg-white'>
        <div className='flex flex-col'>
        <h2 className='font-semibold'>JUN 06</h2>
        <p className='text-gray-600 font-semibold'>THUR</p>
        <p className='text-gray-600 font-semibold'>6:30PM</p>
        </div>
        <div className='w-[1px] h-9 md:h-15 bg-gray-700 my-1 md:my-2 mx-3 md:mx-6'></div>
        <div>
        <h2 className='font-semibold'>Sabi, Lagos, Nigeria</h2>
        <p className='text-gray-600 font-semibold'>Ayra Starr</p>
        </div>
        <a className='px-2 sm:px-3 md:px-4 py-1 rounded-xl md:rounded-2xl ml-2   text-sky-600 hover:text-fuchsia-500'>See Tickets</a>
        </div>

        <div className='flex w-11/12 sm:w-10/12 lg:w-5/12 shadow-md mx-4 sm:mx-8 md:mx-10 my-4 rounded-xl py-2 px-4 md:px-7 text-[10px] md:text-[18px] bg-white'>
        <div className='flex flex-col'>
        <h2 className='font-semibold'>JUN 20</h2>
        <p className='text-gray-600 font-semibold'>SUN</p>
        <p className='text-gray-600 font-semibold'>6:30PM</p>
        </div>
        <div className='w-[1px] h-9 md:h-15 bg-gray-700 my-1 md:my-2 mx-3 md:mx-6'></div>
        <div>
        <h2 className='font-semibold'>The 02, London, United Kingdom</h2>
        <p className='text-gray-600 font-semibold'>Usher</p>
        </div>
        <a className='px-2 sm:px-3 md:px-4 py-1 rounded-xl md:rounded-2xl ml-2   text-sky-600 hover:text-fuchsia-500'>See Tickets</a>
        </div>
        </div>
    </div>
  )
}

export default Ticket
