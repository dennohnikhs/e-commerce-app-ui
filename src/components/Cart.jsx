import React from "react";
import { Layout } from "./Layout";

export const Cart = () => {
  return (
    <Layout>
      <article className="bg-gray-100 p-5 flex flex-col justify-between w-full ">
        <aside className=" flex justify-between">
          <h3 className="text-bold">Shopping Cart</h3>

          <button className="bg-gray-300 rounded-lg px-1 border border-gray-300">
            Checkout
          </button>
        </aside>
        <aside>
          <table class="  w-full mt-5">
            <thead>
              <tr className=" border-b border-gray-300">
                <th className="text-left">Item</th>
                <th className="text-center">Quantity</th>
                <th className="text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="text-center">5</td>
                <td className="text-right">100ksh</td>
              </tr>
            </tbody>
          </table>
        </aside>
        <aside className="mt-5">
          <button className="bg-gray-300 rounded-lg px-1 border border-gray-300 ">
            Clear
          </button>
        </aside>
        <aside className="pt-3">
          <h3 className="text-bold">Total:$100</h3>
        </aside>
      </article>
    </Layout>
  );
};
