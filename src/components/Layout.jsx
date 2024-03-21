import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchCategories } from "../utils/fetcher";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

export const Layout = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    navigate("/search?s=" + e.target.value);
  };

  return (
    <div>
      <div className="bg-gray-300  ">
        <div className="  p-5   font-bold  bg-gray-100 grid grid-cols-1  lg:grid-cols-6 gap-4">
          <Link to={"/"} className="col-span-3">
            <div>Qmsi store</div>
          </Link>

          <Link to={"/"} className="col-span-1">
            <div>Account</div>
          </Link>
          <Link to={"/"} className="col-span-1">
            <div>Help</div>
          </Link>
          <Link to={"/cart"} className="col-span-1">
            <Badge color="secondary" overlap="rectangular">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
        <div className="bg-gray-500 flex flex-row justify-center p-3 ">
          <label className=" p-2 ">search</label>
          <input
            name="search"
            type="text"
            className=" border border-gray-400 text-xs font-normal  p-2 lg:w-[250px]  text-gray-500  rounded-md"
            placeholder="search products,brands and categories"
            onChange={handleChange}
          />
        </div>
        <div className="  bg-white flex flex-row ">
          <section className="bg-gray-300   p-5 gap-5 w-[20%] text-gray-500 cursor-pointer   flex flex-col  ">
            <div>
              {categories.map((category) => (
                <ul key={category.id}>
                  <Link to={`/categories/${category.id}`}>
                    <li>{category.title}</li>
                  </Link>
                </ul>
              ))}
            </div>
          </section>
          <section className=" w-full p-5">{children}</section>
        </div>
        <footer className="  text-center  bg-gray-100  ">
          <Link to={"/"} className="text-gray-500">
            Home
          </Link>
          |
          <Link to={"/cart"} className="text-gray-500">
            Cart
          </Link>
        </footer>
      </div>
    </div>
  );
};
