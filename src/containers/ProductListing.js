import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
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
