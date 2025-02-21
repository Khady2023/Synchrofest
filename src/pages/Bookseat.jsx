import React, { useState } from "react";

const Bookseat = () => {
  // Initialize the seating arrangement as a 2D array (rows and seats)
  const [seats, setSeats] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(10).fill(false)) // 5 rows and 10 seats per row, all initially unbooked
  );

  const handleBookSeat = (row, seat) => {
    if (seats[row][seat]) {
      alert("This seat is already booked. Please choose another.");
    } else {
      const updatedSeats = [...seats];
      updatedSeats[row][seat] = true; // Book the seat
      setSeats(updatedSeats);
      alert(`Seat in Row ${row + 1}, Seat ${seat + 1} is successfully booked!`);
    }
  };

  return (
    
    <div>
        <div className='w-screen h-35 sm:h-50 bg-gray-600 '>
        <h1 className='font-bold text-white pt-25 sm:pt-30 pl-12 sm:pl-20 text-xl md:text-3xl'>Concert Seat Booking</h1>
      </div>
     

      {/* Display the seats */}
      <div  style={{textAlign: "center" }}>
      <h1 className="font-bold py-5 text-fuchsia-500">Choose your seat</h1>
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} style={{ margin: "10px 0" }}>
            <span>Row {rowIndex + 1}: </span>
            {row.map((isBooked, seatIndex) => (
              <button
                key={seatIndex}
                style={{
                  backgroundColor: isBooked ? "red" : "green",
                  color: "white",
                  margin: "10px",
                  borderRadius: "50%",
                  padding: "10px",
                  cursor: isBooked ? "not-allowed" : "pointer",
                }}
                disabled={isBooked} // Disable the button if the seat is already booked
                onClick={() => handleBookSeat(rowIndex, seatIndex)}
              >
                {seatIndex + 1}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookseat;
