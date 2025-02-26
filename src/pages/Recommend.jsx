/* eslint-disable react/prop-types */ 
import { useState } from 'react';

const Recommend = ({ title }) => {

  // Image and artist data
  const artists = [
    { name: 'Taylor Swift', genre: 'Pop', venue: 'Madison Square Garden', date: '2025-04-25', time: '7:00 PM', price: '$150', img: '/pic1.jpeg' },
    { name: 'Pop music', genre: 'Pop', venue: 'The Forum', date: '2025-05-10', time: '8:00 PM', price: '$120', img: '/pic2.jpeg' },
    { name: 'Bruno Mars', genre: 'Pop', venue: 'Hollywood Bowl', date: '2025-06-05', time: '9:00 PM', price: '$180', img: '/pic3.jpeg' },
    { name: 'Afro beat', genre: 'Afrobeat', venue: 'O2 Arena', date: '2025-07-12', time: '6:30 PM', price: '$110', img: '/pic4.jpeg' },
    { name: 'Jazz', genre: 'Jazz', venue: 'Blue Note', date: '2025-08-20', time: '7:30 PM', price: '$90', img: '/pic5.jpeg' },
    { name: 'Tems', genre: 'Afrobeat', venue: 'Wembley Stadium', date: '2025-09-15', time: '8:00 PM', price: '$200', img: '/pic6.jpeg' },
    { name: 'Ed Sheeran', genre: 'Pop', venue: 'Madison Square Garden', date: '2025-10-10', time: '7:30 PM', price: '$160', img: '/pic7.jpeg' },
    { name: 'Drake', genre: 'Hip-Hop', venue: 'Barclays Center', date: '2025-11-05', time: '9:00 PM', price: '$190', img: '/pic8.jpeg' }
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleClick = (artist) => {
    setSelectedArtist(artist);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='my-10 mt-16'>
      <h1 className='font-bold text-sm md:text-xl lg:text-2xl font-verdana'>{title}</h1>
      <div className='grid sm:grid-cols-1 gap- md:grid-cols-2 lg:grid-cols-4 space-y-6 md:space-y-10 my-6'>
        {artists.map((artist, index) => (
          <div key={index} onClick={() => handleClick(artist)}>
            <img 
              className='rounded-xl w-10/12 h-60 lg:h-50 md:w-9/12 object-fill hover:scale-105 cursor-pointer'
              src={artist.img} 
              alt={artist.name} 
            />
            <div className='flex space-x-5'>
              <p>{artist.name}</p>
              <p className='text-fuchsia-500 rounded-lg px-2 hover:text-sky-500'>
                <a href='/bookseat'>Book seat</a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedArtist && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-sky-100 p-6 rounded-lg w-7/12 md:w-5/12 lg:w-3/12 shadow-md ">
            <h2 className="text-xl font-bold mb-4">{selectedArtist.name}</h2>
            <p><strong>Genre:</strong> &nbsp;&nbsp;&nbsp;&nbsp; {selectedArtist.genre}</p>
            <p><strong>Venue:</strong> &nbsp;&nbsp;&nbsp;&nbsp; {selectedArtist.venue}</p>
            <p><strong>Date:</strong> &nbsp;&nbsp;&nbsp;&nbsp; {selectedArtist.date}</p>
            <p><strong>Time:</strong> &nbsp;&nbsp;&nbsp;&nbsp; {selectedArtist.time}</p>
            <p><strong>Price:</strong> &nbsp;&nbsp;&nbsp;&nbsp; {selectedArtist.price}</p>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommend;
