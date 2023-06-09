import { useContext, useEffect, useState } from "react";
import { AuthContenxt } from "../../Provider/AuthProvider";
import { baseServerUrl } from "../../utils/url";
import BookingTable from "./BookingTable";

const Bookings = () => {
    const [bookings, setBookings] = useState([])


   
    const { user } = useContext(AuthContenxt);
     const url = `${baseServerUrl}/bookings/?email=${user?.email}`;

     useEffect(() => {
       fetch(url, {
         method: "GET",
         headers: {
           authorization: `Bearer ${localStorage.getItem("auto-tech-token")}`,
         },
       })
         .then((res) => res.json())
         .then((data) => {
           setBookings(data);
         })
         .catch((error) => {
          setBookings([])
          // logout and then navigate to login page
           console.log(error);
         });
     }, [url]);

   

  
      return (
        <div>
         
          <h2 className="text-2xl">Customer Name: {user?.displayName} </h2>
          <h2 className="text-xl">Email: {user?.email} </h2>
          <BookingTable bookings={bookings} />
        </div>
      );
    

   
};

export default Bookings;