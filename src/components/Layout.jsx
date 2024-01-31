import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/fetcher";
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
      <div className="bg-gray-500">
        <div className="text-center py-5 text-white font-bold">
          Online Store
        </div>

        <div className="flex flex-row bg-white  ">
          <section className="bg-gray-400 p-5 ">
            {categories.map((category) => (
              <Link to={`/categories/${category.id}`}>
                <li>{category.title}</li>
              </Link>
            ))}
          </section>
          <section className=" p-5">{children}</section>
        </div>
        <footer className="text-center bg-gray-500  text-white">
          <Link to={"/"}>Home</Link>|<Link to={"/cart"}>Cart</Link>
        </footer>
      </div>
    </div>
  );
};
