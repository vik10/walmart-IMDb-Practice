import { useSelector } from "react-redux";

const Fullcredits = () => {
  const state = useSelector((state) => state.rootReducer.fetchSlice);
  console.log(state);

  if (!state.productDetails.length) return <h1>Loading...</h1>;

  return (
    <div className="fullcastCont p-3 rounded border container-lg mt-5">
      <div className="row">
        <img src={state.product.image} alt="" className="col-2" />
        <div className="col">
          <h4 className="text-info">
            {state.product.title} ({state.product.year})
          </h4>
          <h2 className="fw-normal">Full Cast and Crew</h2>
        </div>
      </div>
      <h5 className="text-secondary mt-5 border-bottom pb-1">
        Directed by : {state.product.crew.split("(")[0]}
      </h5>
      <p className="text-secondary border-bottom pb-1">
        Cast <span>(in credits order)</span>
      </p>
      <div className="cont mt-4">
        {state.productDetails.map((item) => (
          <div
            className="row mb-2"
            key={item.id}
            style={{ background: "#f2f2f2" }}
          >
            <img
              src={item.image}
              alt="..."
              className="col-2"
              style={{ height: 80 }}
            />
            <span className="col-4 text-dark">{item.asCharacter}</span>
            <span className="col text-primary">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fullcredits;
