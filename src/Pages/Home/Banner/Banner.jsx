import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import SliderBtn from './SliderBtn';

const Banner = () => {
    return (
      <div style={{ height: "600px" }} className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-lg" />
          <div className=" rounded-lg backgrop absolute w-full h-full left-0 top-0 z-0 from-black to-transparent bg-gradient-to-r "></div>
          <div className="absolute top-1/4 left-10 w-3/4 md:w-1/2 lg:w-1/3 text-white z-10">
            <h2 className="lg:text-6xl md:text-5xl text-4xl mb-2">Affordable Price For Car Servicing</h2>
            <p className="mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus voluptatum neque nihil quaerat labore deserunt?
              Deserunt facere minima minus commodi?
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <button className="btn btn-error">Discover More</button>
              <button className="btn">Latest Project</button>
            </div>
          </div>
          <SliderBtn next={2} pre={6} />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <SliderBtn next={3} pre={1} />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <SliderBtn next={4} pre={2} />
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <SliderBtn next={5} pre={3} />
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <SliderBtn next={6} pre={4} />
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <SliderBtn next={1} pre={5} />
        </div>
      </div>
    );
};

export default Banner;