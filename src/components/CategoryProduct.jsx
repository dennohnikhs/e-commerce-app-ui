import { Link, useNavigate } from "react-router-dom";
import { Layout } from "./Layout";

export const CategoryProduct = ({
  title,
  specs,
  features,
  price,
  stock,
  image,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <article className="py-2">
        <div className="category-product-title font-bold text-pa-green py-1  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
          <Link
            to={`products/${id}`}
            key={id}
            className="underline text-violet-600"
          >
            {title}
          </Link>
        </div>
        <figure>
          <img src={`/assets/${image}`} alt={title} />
        </figure>
        <aside>
          <div className="category-product-info-dimensions">
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
          </div>
          {specs.capacity && ( // Check if specs.capacity exists
            <div className="category-product-info-capacity">
              <h3>Capacity</h3>
              <label>{specs.capacity}</label>
            </div>
          )}
          <div className="category-product-info-features">
            <h3>Features</h3>
            {features?.map((feature) => {
              return <li key={feature}>{feature}</li>;
            })}
          </div>
        </aside>
        <aside className="category-product-finance">
          <div className="category-product-info-finance-price">
            <div>&pound;{price}</div>
          </div>
          <div className="category-product-info-stock">
            <label>Stock Level:{stock}</label>
            <label>FREE DELIVERY</label>
          </div>
          <div className="category-product-action">
            <button
              onClick={() => {
                navigate(`products/${id}`);
              }}
            >
              View Product
            </button>
            <button>Add Product</button>
          </div>
        </aside>
      </article>
    </Layout>
  );
};
