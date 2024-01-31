import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utils/fetcher";
import { Layout } from "./Layout";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchProductDetails = async () => {
      const productId = params.productId;
      const responseObject = await getProductById(productId);
      console.log("responseObject", responseObject);
      setProduct(responseObject);
    };
    fetchProductDetails();
  }, [params.productId]);
  const createMarkup = () => {
    return { __html: product.description };
  };
  return (
    <Layout>
      <article className="p-5">
        <article className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <aside>
            <div className="category-product-title font-bold text-pa-green py-1  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
              {product.title}
            </div>
            <figure>
              <img src={`/assets/${product.image}`} alt={product.title} />
            </figure>
          </aside>

          <aside>
            <div className="category-product-info-features">
              <h3>Features</h3>
              {product.features?.map((feature) => {
                return <li key={feature}>{feature}</li>;
              })}
            </div>
            <div className="category-product-info-dimensions">
              <h3>Dimensions</h3>
              <label>{product.specs?.dimensions}</label>
            </div>
            {product.specs?.capacity && ( // Check if specs.capacity exists
              <div className="category-product-info-capacity">
                <h3>Capacity</h3>
                <label>{product.specs?.capacity}</label>
              </div>
            )}
          </aside>
          <aside className="category-product-finance">
            <div className="category-product-info-stock">
              <label>
                Stock Level:
                <span className="text-green-500 px-2">{product.stock}</span>
              </label>
              <label>FREE DELIVERY</label>
            </div>
            <div className="category-product-info-finance-price">
              <div>&pound;{product.price}</div>
            </div>
            <div className="category-product-action">
              <button>Add to Cart</button>
            </div>
          </aside>
        </article>
        <article>
          <div className="category-product-info-features">
            <h3>Description</h3>
            <div dangerouslySetInnerHTML={createMarkup()}></div>
          </div>
        </article>
      </article>
    </Layout>
  );
};
