import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";
import { removeSelectedProduct } from "../redux/reducers/productReducer";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProducts(res.data));
  };
  //useEffect should run when product id changes
  useEffect(() => {
    if (productId && productId !== "") fetchDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  return (
    <div className="container prDetail">
      {Object.keys(product).length === 0 ? (
        <div>
          <h3>...Loading</h3>
        </div>
      ) : (
        <>
          <div className="prCard card">
            <img src={image} alt="image" className="px-5 py-5" />
            <div className="card-body text-center text-black">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{category}</p>
              <p>${price}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
