import React, { useEffect, useState } from "react";

import { Layout } from "./Layout";
import { useSearchParams } from "react-router-dom";
import { fetchProductsByQuery } from "../utils/fetcher";
import ProductCard from "./card/ProductCard";

export const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [emptyResults, setEmptyResults] = useState(null);

  let [searchParams] = useSearchParams();
  let query = searchParams.get("s");
  useEffect(() => {
    const fetchSearchedProducts = async () => {
      const productsFromApi = await fetchProductsByQuery(query);
      if (productsFromApi.length > 0) {
        setProducts(productsFromApi);
      } else {
        setEmptyResults("No results was found from your search");
      }
    };
    fetchSearchedProducts();
  }, [query]);

  return (
    <div>
      <Layout>
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <div className="text-red-300">{emptyResults}</div>
        </div>
      </Layout>
    </div>
  );
};
