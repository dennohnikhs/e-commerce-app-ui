// CategoryProducts.js
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchProducts } from "../utils/fetcher";
import { Layout } from "./Layout";
import ProductCard from "./card/ProductCard";

export const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const productsFromApi = await fetchProducts(params.categoryId);
      setProducts(productsFromApi);
    };
    fetchCategoryProducts();
  }, [params.categoryId]);

  return (
    <Layout>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};
