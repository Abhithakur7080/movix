import { useEffect } from "react";
                     
import { useSelector, useDispatch } from "react-redux";
import {
  getApiUrlConfiguration,
  getGenres,
  homeSelector,
} from "./redux/reducers/homeReducer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResults from "./pages/home/searchResults/SearchResults";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import { fetchDataFromAPI } from "./support/api";
import Admin from "./components/admin/Admin";
const App = () => {
  const { url } = useSelector(homeSelector);
  const dispatch = useDispatch();
  const fetchAPIConfig = () => {
    fetchDataFromAPI("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiUrlConfiguration(url));
    });
  };
  useEffect(() => {
    fetchAPIConfig();
  }, []);
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<SearchResults/>}/>
        <Route path="/:explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/> 
      <Admin/>
    </BrowserRouter>
  );
};

export default App;
