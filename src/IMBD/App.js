import { Provider } from "react-redux";
import store from "./store";
import "./main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import MainContainer from "./componets/MainContainer";
import ProductContainer from "./componets/ProductContainer";
import FilterContainer from "./componets/FilterContainer";
import Watchlist from "./componets/Watchlist";
import Posters from "./componets/Posters";
import Fullcredits from "./componets/Fullcredits";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact>
              <MainContainer />
            </Route>
            <Route path="/product/*">
              <ProductContainer />
            </Route>
            <Route path="/filterCont" exact>
              <FilterContainer />
            </Route>
            <Route path="/watchlist" exact>
              <Watchlist />
            </Route>
            <Route path="/posters" exact>
              <Posters />
            </Route>
            <Route path="/fullcredits">
              <Fullcredits />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
