import Header from "./componets/Header";
import MainContainer from "./componets/MainContainer";
import { Provider } from "react-redux";
import { store } from "./store";
import "./main.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MainContainer />
      </Provider>
    </>
  );
}

export default App;
