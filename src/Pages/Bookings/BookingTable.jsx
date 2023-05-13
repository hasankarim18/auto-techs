import { useEffect, useState } from "react";
import { baseServerUrl } from "../../utils/url";
import { toast } from "react-toastify";


const BookingTable = ({ bookings }) => {
  const [showBookings, setShowBookings] = useState([]);
 

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
    setShowBookings(bookings);
  }, [bookings]);

  return (
    <div className="overflow-x-auto w-full my-8 ">
      <h3 className="text-4xl">Total Bookings: {showBookings.length} </h3>
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
          {showBookings.map((booking) => {
            const { service, img, customerName, email, price, date, _id, status } =
              booking;
            
            return (
              <tr key={booking._id}>
                <th>
                  <button
                    onClick={() => deleteBooking(_id)}
                    className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
                  >
                    {/* <input type="checkbox" className="checkbox" /> */}X
                  </button>
                </th>
                <td>
                  <div className="text-xl">Name: {customerName}</div>
                  <div>Email: {email}</div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{service}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {img && (
                        <img
                          src={img}
                          className="w-40 h-40"
                          alt="Avatar Tailwind CSS Component"
                        />
                      )}
                    </div>
                  </div>
                </td>
                <td>${price}</td>
                <td>{date}</td>

                <th>
                  {status === 'confirm' ? (
                    <button
                      onClick={() => handleBookingConfirm(_id, null)}
                      className="btn btn-success btn-sm"
                    >
                     Make unconfirmed
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBookingConfirm(_id, 'confirm')}
                      className="btn btn-warning btn-sm"
                    >
                      Please Confirm 
                    </button>
                  )}
                </th>
              </tr>
            );
          })}
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
