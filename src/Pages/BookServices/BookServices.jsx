import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContenxt } from "../../Provider/AuthProvider";


const BookServices = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContenxt)
    const { title,price, _id, img } = service;


    const handleBookService = (event)=> {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
      //  const email = form.email.value 
        const date = form.date.value 
        const email = user?.email 
       
        const order = {
            customerName:name,
            email,
            date, 
            service_id:_id,
            price:price,
            service:title,
            img
        }

        // console.log(order);

       fetch("http://localhost:5000/bookings", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"           
         },
         body: JSON.stringify(order)
       })
         .then((res) => res.json())
         .then((data) => {
          // console.log(data);
           if(data.insertedId){
            alert('Confirm order successful')
           }
         })
         .catch((error) => console.log(error));


    }

    return (
      <div className="my-8">
        <h2 className="text-3xl text-center font-semibold">
          Book services of {title}
        </h2>
        <div className="">
          <div className="card-body">
            <form onSubmit={handleBookService}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* service name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      name="name"
                      defaultValue={user?.displayName}
                    />
                  </div>
                  {/* service date */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered"
                      name="date"
                    />
                  </div>
                </div>
                {/* second row */}
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                      defaultValue={user?.email}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Due Amount</span>
                    </label>
                    <input
                      type="text"
                      readOnly
                      placeholder="password"
                      className="input input-bordered"
                      defaultValue={price}
                    />
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary btn-block" value="Confirm Order"  />
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default BookServices;