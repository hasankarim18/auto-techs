import { useEffect, useState } from "react";
import { baseServerUrl } from "../../utils/url";
import { toast } from "react-toastify";
import BookingsRow from "./BookingsRow";
import {  useNavigate } from "react-router-dom";


const BookingTable = ({ bookings }) => {
  
 // console.log(bookings);
 const navigate = useNavigate()
  const [showBookings, setShowBookings] = useState([]);

  const navigateToLogin = ()=> {
    navigate('/login')
  }

  const deleteSuccess = () => toast("Delete Booking Successfull");

  const deleteBooking = (id) => {
    const proceed = confirm("Are You Sure?");

    const url = `${baseServerUrl}/bookings/${id}`;

    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {         
          if (data.deletedCount > 0) {
            const filter = showBookings.filter((item) => item._id !== id);
            setShowBookings(filter);
            deleteSuccess();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleBookingConfirm = (id, status)=> {
    fetch(`${baseServerUrl}/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((data) => {
       // console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          
          const remaining = showBookings.filter(booking => booking._id !== id)
          const updated = showBookings.find(booking => booking._id === id)
          
          updated.status = status;
        
          const newBookings = [updated, ...remaining]
          setShowBookings(newBookings);
          const notify = ()=> toast('Update Successful')
          notify();
        }
      })
      .catch((error) => console.log(error));
  }

  

  useEffect(() => {  

    setShowBookings(bookings)
    
  }, [bookings]);

 

  return (
    <div className="overflow-x-auto w-full my-8 ">
      <h3 className="text-4xl">Total Bookings: {showBookings.length} </h3>
      {bookings?.error && (
        <div className="my-8 bg-rose-400 bg-opacity-30 text-3xl font-bold text-center capitalize py-4">
          {bookings.message}. Please{" "}
          <span onClick={navigateToLogin} className="cursor-pointer underline text-blue-400 ">Login Again</span>
        </div>
      )}
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Customer Info</th>
            <th>Sevice Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Details</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {!bookings?.error ? (
            <BookingsRow
              handleBookingConfirm={handleBookingConfirm}
              showBookings={bookings}
              deleteBooking={deleteBooking}
            />
          ) : null}

          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
