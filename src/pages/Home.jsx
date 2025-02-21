import { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '/menu.png';
import close from '/close.png';
import Recommend from './Recommend';


const Home = () => {
    const dance = "/dance.jpg";
    const vibes = "/vibes.png";

    const [toggle, setToggle] = useState(false);
  const [, setActive] = useState('');
  

    const navLink = [
        {
          id: '1',
          title: 'Ticket',
          route: '/ticket' // Updated route to use the id
        },
        {
          id: '2',
          title: 'Concert',
          route: '/concert'
        },
        {
          id: '3',
          title: 'Live update',
          route: '/login' // Updated route to use the id
        }
      ];

  return (
    <div className='w-screen h-screen px-8 lg:px-20 md:px-20 bg-stone-100'>
        <div className='flex flex-row py-10 space-x-20 '>
        <h1 className='font-bold text-xl lg:text-4xl text-sky-400 md:text-2xl '>Synchro<span className='text-fuchsia-500'>Fest</span></h1>


        <div className='flex flex-1 justify-end items-center lg:hidden'>
          <img className='w-6' src={toggle ? close : menu} alt="menu" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-sky-200 to-fuchsia-300 absolute top-20 z-10 mx-4 text-lg rounded-xl right-0 min-w-20`}>
      
      <ul>
        {navLink.map((link)=>(
            <li key={link.id}
            className='hover:text-fuchsia-500 text-sm py-2'
            onClick={()=>{
                setToggle(false);
                setActive(link.title); 
            }}
            ><Link to={link.route}>{link.title}</Link></li>
        ))}

      </ul>
          </div>
        </div>

        { <div className='hidden lg:flex justify-right '>
            <ul className='lg:flex flex-row space-x-20 lg:pl-130 md:hidden '>
                <li className='hover:text-fuchsia-500 hover:border-b-2'><Link to="/ticket">Tickets</Link></li>
                
                <li className='hover:text-fuchsia-500 hover:border-b-2'><Link to="/concert">Concert</Link></li>
                <li className='hover:text-fuchsia-500 hover:border-b-2'><button><Link to="/login">Live update</Link></button></li>
            </ul>
        </div> }

        </div>
        <div className='w-10/12 lg:w-8/12 h-8 md:h-12 md:w-11/12 border border-sky-200 bg-white outline-sky-300 shadow-lg rounded-3xl m-auto'>
        <input type="text" placeholder='Search events, artist, music and more' className='w-full px-3 md:px-8 py-1 md:py-3 text-[10px] md:text-sm outline-none' />
        </div>
        <div className='w-full flex flex-row rounded-2xl sm:rounded-4xl my-6 lg:pl-40 md:pl-10'>
            <div className='w-4/12 bg-sky-300  rounded-l-4xl'>
                <img src={vibes} alt="" className='w-10 sm:w-20 lg:w-60 md:w-30 ml-4 lg:ml-12 md:ml-8 mt-2 md:mt-4' />
               
                    <p className='flex w-full sm:w-7/12 md:w-9/12 border-fuchsia-500 text-fuchsia-600 lg:text-md md:text-sm text-[7px] md:shadow-sm rounded-2xl py-2 sm:py-2 lg:mx-8 md:mx-2 px-2 sm:px-6 md:px-2  md:font-bold '>Listen to Diverse Music Explore different genres, cultures, and styles.</p>
                    
               
            </div>
            <div className='w-8/12'>
                <img src={dance} alt="" className='rounded-r-4xl' />
            </div>
        </div>
        
        <Recommend title="Recommended for you"/>
        <Recommend title="Popular Selections"/>
    </div>
  )
}

export default Home

