import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchProducts } from "../utils/fetcher";
import { Layout } from "./Layout";

export const Category = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const productsFromApi = await fetchProducts(params.categoryId);
      console.log("product", productsFromApi);
      setProducts(productsFromApi);
    };
    fetchCategoryProducts();
  }, [params.categoryId]);

  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        {products.map((product) => (
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <aside>
              <div className="category-product-title font-bold text-pa-green py-1  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className="underline text-violet-600"
                >
                  {product.title}
                </Link>
              </div>
              <figure>
                <img src={`/assets/${product.image}`} alt={product.title} />
              </figure>
            </aside>
            <aside>
              <div className="category-product-info-dimensions">
                <h3>Dimensions</h3>
                <label>{product.specs.dimensions}</label>
              </div>
              {product?.specs.capacity && ( // Check if specs.capacity exists
                <div className="category-product-info-capacity">
                  <h3>Capacity</h3>
                  <label>{product?.specs.capacity}</label>
                </div>
              )}
              <div className="category-product-info-features">
                <h3>Features</h3>
                {product.features?.map((feature) => {
                  return <li key={feature}>{product.features}</li>;
                })}
              </div>
            </aside>
            <aside className="category-product-finance">
              <div className="category-product-info-finance-price">
                <div>&pound;{product.price}</div>
              </div>
              <div className="category-product-info-stock">
                <label>Stock Level:{product.stock}</label>
                <label>FREE DELIVERY</label>
              </div>
              <div className="category-product-action">
                <button
                  onClick={() => {
                    navigate(`/products/${product.id}`);
                  }}
                >
                  View Product
                </button>
                <button>Add Product</button>
              </div>
            </aside>
          </article>
        ))}
      </div>
    </Layout>
  );
};
