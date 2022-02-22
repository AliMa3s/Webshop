import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//---------------Own components-----------------------------
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import BasketPage from "./components/Basket/BasketPage";
import ProductPage from "./components/Products/ProductPage";
import HomePage from "./components/Home/HomePage";
import { API_URL } from "./config/api";
//---------------Own components-----------------------------

const technologie = [{ id: 1, name: "Voorbeeld (via Express Server)"},{ id: 2, name: "React"},{ id: 3, name: "NodeJs"},{ id: 2, name: "React-bootstrap"}];

const App = () => {
  const student = {
    naam: "Ali Maes",
    StudNr: "077110am"
  };

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get(`${API_URL}/movies`)
        .then((response) => setMovies(response.data));
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/products" element={<ProductPage movies={movies} />} />
          <Route path="/" element={<HomePage items={technologie} />}></Route>
        </Routes>
        <Footer naam={student.naam} studentNr={student.StudNr} />
      </div>
    </Router>
  );
};

export default App;
