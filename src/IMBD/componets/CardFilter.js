import AddWatchlist from "./AddWatclist";

const CardFilter = (props) => {
  return (
    <div
      className="cardfilter rounded row mx-0 mb-1 position-relative"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <img
        className="col-2 px-0"
        src={props.obj.image}
        alt="..."
        style={{ height: 100 }}
      ></img>
      <div className="col">
        <p className="fw-normal mb-0">{props.obj.title}</p>
        <span className="text-warning">
          {props.obj.imDbRating}
          <span className="text-dark" style={{ fontSize: 10 }}>
            {props.obj.imDbRatingCount}
          </span>
        </span>
        <p className="text-capitalize fw-bold">{props.obj.category}</p>
      </div>
      <AddWatchlist id={props.obj.id} />
    </div>
  );
};

export default CardFilter;
