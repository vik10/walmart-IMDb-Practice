import { useSelector } from "react-redux";

const Posters = (props) => {
  const state = useSelector((state) => state.rootReducer.fetchSlice);
  console.log(state);

  if (!state.productDetails.length) return <h1>Loading...</h1>;
  return (
    <div className="p-3 rounded border container-lg mt-5">
      <div className="row">
        <img src={state.product.image} alt="" className="col-2" />
        <div className="col">
          <h4 className="text-info">
            {state.product.title} ({state.product.year})
          </h4>
          <h2 className="fw-normal">Photo Gallery</h2>
        </div>
      </div>
      <div className="row btns my-3">
        <p className="col">
          <span className="">{state.productDetails.length} Photos</span>
        </p>
        <p className="col-auto">1 2 3 Next</p>
      </div>
      <div className="picCont gap-1 mx-auto">
        {state.productDetails.map((url, i) => (
          <img
            src={url.image}
            key={i}
            alt="..."
            className="w-100"
            style={{ height: 200 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Posters;
