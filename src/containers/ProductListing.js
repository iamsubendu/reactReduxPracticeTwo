import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="container prList">
      <div className="row">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
