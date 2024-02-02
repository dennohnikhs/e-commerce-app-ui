import React from "react";
const createMarkup = () => {
  return { __html: product.description };
};

const ProductDetailCard = ({
  title,
  image,
  stock,
  price,
  features,
  description,
}) => {
  return (
    <article className="p-5">
      <article className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <aside>
          <div className="category-product-title font-bold text-pa-green py-1  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
            {title}
          </div>
          <figure>
            <img src={`/assets/${image}`} alt={title} />
          </figure>
        </aside>

        <aside>
          <div className="category-product-info-features">
            <h3>Features</h3>
            {features?.map((feature) => {
              return <li key={feature}>{feature}</li>;
            })}
          </div>
          <div className="category-product-info-dimensions">
            <h3>Dimensions</h3>
            <label>{specs?.dimensions}</label>
          </div>
          {product.specs?.capacity && ( // Check if specs.capacity exists
            <div className="category-product-info-capacity">
              <h3>Capacity</h3>specs
              <label>{specs?.capacity}</label>
            </div>
          )}
        </aside>
        <aside>
          <div className="flex flex-col bg-gray-300 p-2 rounded-md font-semibold">
            <label>
              Stock Level:
              <span className="text-green-500 px-2">{stock}</span>
            </label>
            <label>FREE DELIVERY</label>
          </div>
          <div className="category-product-info-finance-price">
            <div>&pound;{price}</div>
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
  );
};

export default ProductDetailCard;
