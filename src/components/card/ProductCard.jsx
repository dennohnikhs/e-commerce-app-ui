// ProductCard.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { addProduct } = cartContext;

  const { id, title, price, image, specs, features, stock } = product;

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <aside>
        <div className="category-product-title font-bold text-pa-green py-1 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={`/products/${id}`} className="underline text-violet-600">
            {title}
          </Link>
        </div>
        <figure>
          <img src={`/assets/${image}`} alt={title} />
        </figure>
      </aside>
      <aside>
        <div className="category-product-info-dimensions">
          <h3>Dimensions</h3>
          <label>{specs.dimensions}</label>
        </div>
        {specs.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </div>
        )}
        <div className="category-product-info-features">
          <h3>Features</h3>
          {features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </div>
      </aside>
      <aside className="category-product-finance">
        <div className="category-product-info-finance-price">
          <div>&pound;{price}</div>
        </div>
        <div className="category-product-info-stock">
          <label>Stock Level: {stock}</label>
          <label>FREE DELIVERY</label>
        </div>
        <div className="category-product-action ">
          <button
            className="hover:bg-gray-600"
            onClick={() => navigate(`/products/${id}`)}
          >
            View Product
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              addProduct({ id, title, price });
            }}
            className="hover:bg-gray-600"
          >
            Add to Cart
          </button>
        </div>
      </aside>
    </article>
  );
};

export default ProductCard;
