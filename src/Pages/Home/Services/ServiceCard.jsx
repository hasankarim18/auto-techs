import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {title, img, price, _id} = service;
  return (
    <li className="card w-96 justify-self-center bg-base-100 border">
      <figure className="px-10 pt-10">
        <img
          style={{ height: "210px", width: "320px" }}
          src={img}
          alt="Shoes"
          className="rounded-xl mb-4 "
        />
      </figure>
      <div className="card-body items-start text-start ">
        <h2 className=" mb-4 card-title text-2xl font-bold">{title}</h2>
        <p className=" mb-4 font-bold text-xl text-orange-600">
          Price: ${price}
        </p>
        <div>
          <Link to={`/book/${_id}`} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ServiceCard;