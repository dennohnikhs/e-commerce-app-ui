import React from "react";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";

export const CheckOut = () => {
  return (
    <Layout>
      <article className="bg-gray-100 p-5 flex flex-col  w-full ">
        <h3 className="category-product-info-finance-price  pb-10">
          Shopping Checkout
        </h3>
        <aside>
          <h3 className="font-bold text-gray-500  pt-5 border-b-2 border-gray-400 mb-10  ">
            Your Details
          </h3>
          <figure className="flex flex-row justify-between w-full ">
            <div className="ml-10  grid grid-cols-1 md:lg:grid-cols-2 lg:lg:grid-cols-2 ">
              <div className="font-normal text-gray-500">
                <div>Full Name</div>
              </div>
              <div className="flex flex-col gap-3 ">
                <input type="text" className="p-2 border border-gray-300 " />
              </div>
            </div>
            <div className="ml-10  grid grid-cols-1 md:lg:grid-cols-2 lg:lg:grid-cols-2  ">
              <div className="font-normal text-gray-500 ">
                <div>Email</div>
              </div>
              <div className="flex flex-col gap-3  ">
                <input type="text" className="p-2 border border-gray-300" />
              </div>
            </div>
          </figure>
        </aside>
        <aside>
          <h3 className="font-bold text-gray-500  pt-5 border-b-4 border-gray-400 mb-10  ">
            Address Details
          </h3>
          <figure>
            <aside className="flex flex-row gap-5 mb-5 font-normal text-gray-500 ">
              <div>copy to shipping</div>
              <input type="checkbox" />
            </aside>
            <aside className="flex flex-row justify-between   w-full ">
              <div className="ml-10  grid grid-cols-1 md:lg:grid-cols-2 lg:lg:grid-cols-2 ">
                <div className="font-normal text-gray-500">
                  <div>Billing Address</div>
                </div>
                <div className="flex flex-col gap-3 ">
                  <input type="text" className="p-2 border border-gray-300 " />
                  <input type="text" className="p-2 border border-gray-300 " />
                  <input type="text" className="p-2 border border-gray-300 " />
                </div>
              </div>
              <div className="ml-10  grid grid-cols-1 md:lg:grid-cols-2 lg:lg:grid-cols-2  ">
                <div className="font-normal text-gray-500">
                  <div>Shipping Address</div>
                </div>
                <div className="flex flex-col gap-3 ">
                  <input type="text" className="p-2 border border-gray-300" />
                  <input type="text" className="p-2 border border-gray-300" />
                  <input type="text" className="p-2 border border-gray-300" />
                </div>
              </div>
            </aside>
          </figure>
        </aside>
        <aside className="pt-5 flex flex-row justify-between mt-5">
          <button className="bg-gray-300 rounded-lg border border-gray-300 p-3">
            <Link to="/cart">Cancel</Link>
          </button>
          <button className="bg-gray-300 rounded-lg border border-gray-300 p-3">
            <Link to="/confirm-order">Confirm Order</Link>
          </button>
        </aside>
      </article>
    </Layout>
  );
};
