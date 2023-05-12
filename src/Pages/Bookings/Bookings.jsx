import { useContext, useEffect, useState } from "react";
import { AuthContenxt } from "../../Provider/AuthProvider";
import { baseServerUrl } from "../../utils/url";

const Bookings = () => {
    const [bookings, setBookings] = useState([])
   
    const { user, loading } = useContext(AuthContenxt);
     let url = `${baseServerUrl}/?email=${user?.email}`;

     useEffect(() => {
       fetch(url)
         .then((res) => res.json())
         .then((data) => {
           setBookings(data);
         })
         .catch((error) => {
           console.log(error);
         });
     }, [url]);

     console.log(bookings);


    if (loading) {
      return <h3 className="text-6xl">Loading....</h3>;
    } else {    
    
      return <div>
        <h2 className="text-2xl" >Customer Name: {user?.displayName} </h2>
        <h2 className="text-xl" >Email: {user?.email} </h2>
        <ul>
            
            <li></li>
        </ul>
      </div>;
    }

   
};

export default Bookings;