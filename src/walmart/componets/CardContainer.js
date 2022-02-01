import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../reducer/fetchDataSlice";
import { useEffect } from "react";

const CardContainer = (props) => {
  const dispatch = useDispatch();
  const BaseProductsArr = useSelector(
    (state) => state.reducer.fetchSlice.ProductArr
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((promise) => promise.json())
      .then((item) => dispatch(fetchingData(item)));
  }, []);

  if (!BaseProductsArr.length) return <h1>Loading...</h1>;

  return (
    <>
      <div className="cardContainer px-4">
        {BaseProductsArr.map((item) => (
          <Card key={item.id} obj={item} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
