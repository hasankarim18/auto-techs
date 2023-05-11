import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <h2 className="text-3xl py-8 font-semibold">Book Services {title}</h2>
      <div className="my-8">
        <div className="card-body">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary btn-block">Confirm Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
