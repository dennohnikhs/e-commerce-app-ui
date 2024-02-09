import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/fetcher";
import { Home } from "react-feather";
export const Layout = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const results = await fetchCategories();
        if (!results) {
          setErrorMessage("sorry no data was found");
        } else {
          setCategories(results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <div>
      <div className="bg-gray-300 ">
        <div className="  text-white font-bold bg-gray-500  flex justify-between p-5">
          <div>
            <Link to={"/"}>
              {" "}
              <Home />
            </Link>
          </div>
          <Link to={"/"}>
            <div>Qmsi store</div>
          </Link>
          <figure>
            <Link to={"/cart"}>
              <img
                src="/assets/cart.jpg"
                alt="Cart"
                className="h-[40px] w-[40px] rounded-lg"
              />
            </Link>
          </figure>
        </div>

        <div className="  bg-white flex flex-row ">
          <section className="bg-gray-300 p-5 gap-5 w-[20%] text-gray-500 cursor-pointer   flex flex-col  ">
            {categories.map((category) => (
              <ul>
                <Link to={`/categories/${category.id}`}>
                  <li key={category.id}>{category.title}</li>
                </Link>
              </ul>
            ))}
          </section>
          <section className=" w-full p-5">{children}</section>
        </div>
        <footer className="  text-center  bg-gray-500  text-white">
          <Link to={"/"}>Home</Link>|<Link to={"/cart"}>Cart</Link>
        </footer>
      </div>
    </div>
  );
};
