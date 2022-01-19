import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((d) => {
    const { id, title, image, price, category } = d;
    return (
      <div className="col-lg-4 col-md-12 mb-5" key={id}>
        <div className="card">
          <div className="px-5 py-5">
            <Link to={`/product/${id}`}>
              <img src={image} alt={title} className="card-img-top" />
            </Link>
          </div>
          <div className="card-body text-center text-black">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{category}</p>
            <p>${price}</p>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
