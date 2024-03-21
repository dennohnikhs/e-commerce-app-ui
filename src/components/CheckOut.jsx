import React, { useState } from "react";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

export const CheckOut = () => {
  //validating the checkout input fields

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    shippingAddress1: "",
    // shippingAddress2: "",
    // shippingAddress3: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    shippingAddress1: false,
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Check if the input value is empty and set the error state accordingly
    if (value.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    if (formInvalid()) {
      return;
    }
    navigate("/confirm-order");
  };

  const formInvalid = () => {
    const errors = {
      name: form.name.length === 0,
      email: form.email.length === 0,
      shippingAddress1: form.shippingAddress1.length === 0,
      // shippingAddress2: form.shippingAddress2.length ===  0,
      // shippingAddress3: form.shippingAddress3.length ===  0,
    };

    return Object.values(errors).some((error) => error);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
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
                  <input
                    type="text"
                    name="name"
                    placeholder="your full name"
                    onChange={handleChange}
                    className={`p-2 border border-gray-300 ${
                      errors.name ? "bg-red-200" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="ml-10  grid grid-cols-1 md:lg:grid-cols-2 lg:lg:grid-cols-2  ">
                <div className="font-normal text-gray-500 ">
                  <div>Email</div>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="your email"
                    onChange={handleChange}
                    className={`p-2 border border-gray-300 ${
                      errors.email ? "bg-red-200" : ""
                    }`}
                  />
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
                    <input
                      onChange={handleChange}
                      placeholder="billing address 1"
                      name="billingAddress1"
                      className="p-2 border border-gray-300 "
                    />

                    <input
                      onChange={handleChange}
                      name="billingAddress2"
                      placeholder="billing address 2"
                      className="p-2 border border-gray-300 "
                    />
                    <input
                      onChange={handleChange}
                      name="billingAddress2"
                      placeholder="billing address 3"
                      className="p-2 border border-gray-300 "
                    />
                  </div>
                </div>
                <div className="ml-10  grid grid-cols-1 md:lg:grid-cols-2 lg:lg:grid-cols-2  ">
                  <div className="font-normal text-gray-500">
                    <div>Shipping Address</div>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <input
                      type="text"
                      name="shippingAddress1"
                      placeholder="shipping address  1"
                      onChange={handleChange}
                      className={`p-2 border border-gray-300 ${
                        errors.shippingAddress1 ? "bg-red-500" : ""
                      }`}
                    />
                    <input
                      onChange={handleChange}
                      name="shippingAddress2"
                      placeholder="shipping address 2"
                      className="p-2 border border-gray-300"
                    />
                    <input
                      onChange={handleChange}
                      name="shippingAddress3"
                      placeholder="shipping address 3 "
                      className="p-2 border border-gray-300"
                    />
                  </div>
                </div>
              </aside>
            </figure>
          </aside>
          <aside className="pt-5 flex flex-row justify-between mt-5">
            <Button variant="contained" className="">
              <Link to="/cart">Cancel</Link>
            </Button>
            <Button
              // className="bg-gray-300 rounded-lg border border-gray-300 p-3 cursor-pointer hover-bg-white"
              type="submit"
              disabled={formInvalid()}
              variant="contained"
            >
              Confirm Order
            </Button>
          </aside>
        </article>
      </form>
    </Layout>
  );
};
