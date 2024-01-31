import axios from "axios";
import { BASE_URL } from "../constants";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(BASE_URL + url);
    const data = response.data;
    if (!data) {
      return false;
    } else {
      return data;
    }
  } catch (error) {
    console.log(" server error");
  }
};

export const fetchCategories = async () => {
  const data = await fetcher("/categories");
  return data;
};
export const fetchProducts = async (id) => {
  const data = await fetcher("/products?catId=" + id);
  return data;
};
export const getProductById = async (id) => {
  const data = await fetcher("/products/" + id);
  console.log("returned data", data);
  return data;
};
