import React from "react";
import { useNavigate } from "react-router-dom";

//better search with debouncing
export const Search = () => {
  const [searchTerm, setSearchItem] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const deleay = setTimeout(() => {
      if (searchItem) {
        navigatee("/search?s=" + searchTerm);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [searchItem, navigate]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="">
      <label>Search</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
