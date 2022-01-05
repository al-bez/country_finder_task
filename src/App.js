import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCountries} from "./redux/store/CountriesReducer";

function App() {

    const dispatch = useDispatch();

    const dispatchFetchedData = () => {
        dispatch(fetchCountries())
    }

    useEffect(() => {
        dispatchFetchedData();
        setInterval(dispatchFetchedData, 30000)
    }, [])

  return (
      <main>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/details/:cca3" element={<Details/>} />
          </Routes>
      </main>
  );
}

export default App;
