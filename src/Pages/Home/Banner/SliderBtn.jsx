


const SliderBtn = ({next, pre}) => {
    return (
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${pre}`} className="btn btn-circle ml-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle ml-5">
          ❯
        </a>
      </div>
    );
};

export default SliderBtn;