
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  justify-between  flex-col lg:flex-row">
          <div style={{ height: "500px" }} className="w-full md:w-1/2 relative">
            <img
              src={person}
              className="w-5/6 h-5/6 rounded-lg shadow-2xl relative"
            />
            <img
              src={parts}
              className="max-w-sm rounded-lg  border-8 border-white  shadow-2xl absolute right-0 bottom-0"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl text-orange-600 font-bold">About us</h1>
            <h3 className="text-4xl font-bold">
              We are qualified & of experience in this field
            </h3>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-warning">Get More Info </button>
          </div>
        </div>
      </div>
    );
};

export default About;