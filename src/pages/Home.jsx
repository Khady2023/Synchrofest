import { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '/menu.png';
import close from '/close.png';
import Recommend from './Recommend';

const Home = () => {
    const dance = "/dance.jpg";
    const vibes = "/vibes.png";
    const arrow = "/arrow.png";

    const [toggle, setToggle] = useState(false);
  const [, setActive] = useState('');
  

    const navLink = [
        {
          id: '1',
          title: 'Ticket',
          route: '' // Updated route to use the id
        },
        {
          id: '2',
          title: 'Schedule',
          route: ''
        },
        {
          id: '3',
          title: 'Live update',
          route: '' // Updated route to use the id
        }
      ];

  return (
    <div>
        <div className='flex flex-row py-10 space-x-20 '>
        <h1 className='font-bold text-xl lg:text-4xl text-sky-400 md:text-2xl '>Synchro<span className='text-fuchsia-500'>Fest</span></h1>


        <div className='flex flex-1 justify-end items-center lg:hidden'>
          <img className='w-6' src={toggle ? close : menu} alt="menu" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-sky-200 to-fuchsia-300 absolute top-20 z-10 mx-4 text-lg rounded-xl right-0 min-w-20`}>
      
      <ul>
        {navLink.map((link)=>(
            <li key={link.id}
            className='hover:text-fuchsia-500'
            onClick={()=>{
                setToggle(false);
                setActive(link.title); 
            }}
            >{link.title}</li>
        ))}

      </ul>
          </div>
        </div>

        { <div className='hidden lg:flex justify-right '>
            <ul className='lg:flex flex-row space-x-20 lg:pl-130 md:hidden '>
                <li className='hover:text-fuchsia-500 hover:border-b-2'>Ticket</li>
                
                <li className='hover:text-fuchsia-500 hover:border-b-2'>Schedule</li>
                <li className='hover:text-fuchsia-500 hover:border-b-2'><button><Link to="/login">Live update</Link></button></li>
            </ul>
        </div> }

        </div>
        <div className='w-10/12 lg:w-8/12 h-10 md:h-12 md:w-11/12 border border-sky-200 bg-white outline-sky-300 shadow-lg rounded-3xl m-auto'>
        <input type="text" placeholder='Search' className='w-full px-3 md:px-8 py-1 md:py-2 text-lg outline-none' />
        </div>
        <div className='w-full flex flex-row rounded-4xl my-6 lg:pl-40 md:pl-10'>
            <div className='w-4/12 bg-sky-300  rounded-l-4xl'>
                <img src={vibes} alt="" className='w-20 lg:w-60 md:w-40 ml-4 lg:ml-12 md:ml-8 md:mt-4' />
               
                    <p className='flex space-x-4 md:border border-fuchsia-500 text-fuchsia-500 lg:text-md md:text-sm text-[10px] md:shadow-sm rounded-2xl  py-2 lg:mx-28 md:mx-8 px-6 md:px-7 hover:bg-fuchsia-600  md:font-bold hover:text-white'>Book a seat <img className='w-5' src={arrow} alt="" /></p>
                    
               
            </div>
            <div className='w-8/12'>
                <img src={dance} alt="" className='rounded-r-4xl' />
            </div>
        </div>
        <div className=''>
        <ul className='flex space-x-4 lg:space-x-70 md:space-x-15 py-2 md:py-4 lg:ml-30 md:ml-10'>
            <li className='border border-sky-300 hover:bg-sky-200 p-2 px-4 shadow-lg rounded-4xl'>Upcoming show</li>
            <li className='border border-sky-300 hover:bg-sky-200 p-2 px-4 md:px-14 shadow-lg rounded-4xl'>Status</li>
            <li className='border border-sky-300 hover:bg-sky-200 p-2 px-4 md:px-14 shadow-lg rounded-4xl'>Venue</li>
        </ul>
        </div>
        <Recommend title="Recommended for you"/>
        <Recommend title="Popular Selections"/>
    </div>
  )
}

export default Home
