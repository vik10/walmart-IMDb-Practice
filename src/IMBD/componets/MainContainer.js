import { useEffect, useRef, useState } from "react";
import PosterContainer from "./PosterContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../reducer/fetchDataSlice";
import Card from "./Card";

const MainContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.fetchSlice);

  const [scrollBtn, SetscrollBtn] = useState(true);
  const [scrollBtnLeft, SetscrollBtnLeft] = useState(false);
  const myRef = useRef();

  const handleScrollRight = () => {
    myRef.current.scrollLeft += myRef.current.clientWidth;
    SetscrollBtnLeft(true);
    myRef.current.scrollLeft + myRef.current.clientWidth ===
    myRef.current.scrollWidth
      ? SetscrollBtn(false)
      : SetscrollBtn(true);
  };

  const handleScrollLeft = () => {
    myRef.current.scrollLeft -= myRef.current.clientWidth;
    SetscrollBtn(true);
    myRef.current.scrollLeft === 0
      ? SetscrollBtnLeft(false)
      : SetscrollBtnLeft(true);
  };

  useEffect(() => {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_vlyh84z4")
      .then((promise) => promise.json())
      .then((item) => dispatch(fetchingData(item.items)));
  }, []);

  if (!state.productsArr.length) return <h1>Loading...</h1>;

  return (
    <>
      <div className="mainContainer">
        <PosterContainer productsArr={state.productsArr} />
        <div className="container-lg mt-5">
          <h1 className="text-warning">What to watch </h1>
          <p style={{ color: "#8c8c8c" }}>Tv show and movies just for you</p>
          <span className="text-info">sign in</span>
          <div className="position-relative mx-auto" style={{ maxWidth: 1200 }}>
            <div
              ref={myRef}
              className="cardContainer  row gap-3 py-1 flex-nowrap mt-5 mx-auto"
            >
              {state.productsArr.map((item, i) => (
                <Card key={item.id} obj={item} />
              ))}
            </div>
            <button
              className={`btn btn-outline-info col-auto fw-bold position-absolute top-50 start-0 translate-middle-y ${
                scrollBtnLeft ? "d-block" : "d-none"
              }`}
              onClick={handleScrollLeft}
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button
              className={`btn btn-outline-info col-auto fw-bold position-absolute top-50 end-0 translate-middle-y ${
                scrollBtn ? "d-block" : "d-none"
              }`}
              onClick={handleScrollRight}
            >
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;

// {
//   ...arr[i],
//   category: "movie",
// }
