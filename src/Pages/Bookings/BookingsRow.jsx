

const BookingsRow = ({ showBookings, deleteBooking, handleBookingConfirm }) => {
  return (
    <>
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
              {status === "confirm" ? (
                <button
                  onClick={() => handleBookingConfirm(_id, null)}
                  className="btn btn-success btn-sm"
                >
                  Make unconfirmed
                </button>
              ) : (
                <button
                  onClick={() => handleBookingConfirm(_id, "confirm")}
                  className="btn btn-warning btn-sm"
                >
                  Please Confirm
                </button>
              )}
            </th>
          </tr>
        );
      })}
    </>
  );
};

export default BookingsRow;