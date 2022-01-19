import React from "react";
import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404! Not Found!!!</Route>
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
