import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToObj, fetchAnyData } from "../utilit";
import { Link } from "react-router-dom";
import { handleProductDetails } from "../reducer/fetchDataSlice";
import { addTolist } from "../reducer/fetchDataSlice";

const ProductContainer = (props) => {
  const dispatch = useDispatch();
  const obj = useSelector((state) => state.rootReducer.fetchSlice.product);

  const [posterArr, setPosterArr] = useState([]);
  const [videoid, setVideoid] = useState("");
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchAnyData(
      `https://imdb-api.com/en/API/Images/k_vlyh84z4/${obj.id}/Short`,
      setPosterArr,
      "items"
    );
    fetchAnyData(
      `https://imdb-api.com/en/API/YouTubeTrailer/k_vlyh84z4/${obj.id}`,
      setVideoid,
      "videoId"
    );
    fetchAnyData(
      `https://imdb-api.com/en/API/FullCast/k_vlyh84z4/${obj.id}`,
      setCast,
      "actors"
    );
  }, []);

  if (posterArr === null) return <h1>key Expired...</h1>;
  if (!posterArr.length) return <h1>Loading...</h1>;

  return (
    <>
      <div className="productCont">
        <div className="poster"></div>
        <div className="container-lg bg-dark text-light py-2 px-3">
          <div className="row mx-0">
            <div className="col">
              <h1 className="fw-normal" style={{ fontSize: "2.5em" }}>
                {obj.title}
              </h1>
              <div className="d-felx my-3">
                <span>{obj.year}</span>
                <span className="mx-2">.</span>
                <span>{obj.rank}</span>
                <span className="mx-2">.</span>
                <span>1h 37m</span>
              </div>
            </div>
            <div className="col d-flex gap-3 justify-content-end">
              <div className="text-center">
                <p className="text-uppercase fw-bold ls-3">imbd rating</p>
                <span>
                  <i
                    className="fa fa-star me-3 fs-3 text-warning"
                    aria-hidden="true"
                  ></i>
                  {obj.imDbRating} / 10
                </span>
                <p className="text-secondary" style={{ fontSize: 11 }}>
                  {obj.imDbRatingCount}
                </p>
              </div>
              <div className="text-center">
                <p className="text-uppercase fw-bold ls-3">your rating</p>
                <i
                  className="fa fa-star-o me-3 fs-3 text-primary"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="text-center">
                <p className="text-uppercase fw-bold ls-3">POPULARITY</p>
                <i
                  className="fa fa-space-shuttle me-3 fs-3 text-success"
                  aria-hidden="true"
                ></i>
                {obj.rank}
              </div>
            </div>
          </div>
          <div className="row bg-secondary mx-0 py-2 rounded">
            <div className="text-capitalize col d-flex gap-3 justify-content-end">
              <Link
                to="/fullcredits"
                className="text-warning"
                onClick={() => dispatch(handleProductDetails(cast))}
              >
                cast crew
              </Link>
              <span>user review</span>
              <span>trivia</span>
            </div>
            <i className="fa fa-th-large col-auto fs-2" aria-hidden="true"></i>
            <i
              className="fa fa-share-alt-square col-auto fs-2"
              aria-hidden="true"
            ></i>
          </div>
          <div className="row mt-3">
            <div className="col-3 px-0">
              <img className="w-100" src={obj.image} alt=".."></img>{" "}
            </div>
            <iframe
              className="col"
              src={`https://www.youtube.com/embed/${videoid}`}
            ></iframe>
            <div className="col-2 photoNvdo p-3">
              <div className="w-100 rounded ">
                <i className="fa fs-2 fa-video-camera" aria-hidden="true"></i>
                <span>10 Videos</span>
              </div>
              <Link
                to={{ pathname: `/posters`, search: "", state: "9i9" }}
                onClick={() => dispatch(handleProductDetails(posterArr))}
                className="w-100 rounded pointer position-relative text-warning"
              >
                <img
                  src={posterArr[0].image}
                  alt=".."
                  className="w-100 h-100"
                />
                <span className="position-absolute top-50 start-50 translate-middle">
                  <i className="fa fs-4 fa-picture-o" aria-hidden="true"></i>
                  <span>{posterArr.length} Photos</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="row py-4 gap-5">
            <div className="col info text-capitalize">
              <div className="d-flex gap-4">
                <span className="badge bg-primary">Action</span>
                <span className="badge bg-warning">Action</span>
                <span className="badge bg-success">Action</span>
              </div>
              <p className="border-bottom border-secondary py-3">
                {obj.fullTitle}
              </p>
              <p className="border-bottom border-secondary pb-3">
                <span className="fw-bold fs-5 me-2">Director :</span>
                {obj.crew.split(",")[0].substr(0).split("(")[0]}
              </p>
              <p className="border-bottom border-secondary pb-3">
                <span className="fw-bold fs-5 me-2">writers :</span>
                {obj.crew.split(",")[1]}
              </p>
              <p className="border-bottom border-secondary pb-3">
                <span className="fw-bold fs-5 me-2">stars :</span>
                {obj.crew.split(",")[2]}
              </p>
            </div>
            <div className="col-4 ">
              <div className="bg-secondary rounded text-dark py-3 ps-4">
                <i className="fa fa-step-forward me-3" aria-hidden="true"></i>
                See Showtime
              </div>
              <div
                className="bg-warning pointer rounded text-dark py-3 ps-4 mt-4"
                onClick={() => {
                  dispatch(addTolist(obj.id));
                }}
              >
                <i className="fa fa-plus me-3" aria-hidden="true"></i>
                Add to Watchlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
