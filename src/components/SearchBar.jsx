import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import { CiSearch } from "react-icons/ci";  
import { IoClose } from "react-icons/io5";  

const SearchBar = () => {
  const [isSearchBar, setSearchBar] = useState(true);  
  const [search, setSearch] = useState("");  
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (search.trim()) {

      navigate(`/category?search=${search}`);
    }
  };

  return (
    <>
      {isSearchBar && (
        <div className="absolute px-6 top-0 right-0 mt-28 flex flex-row border justify-center min-w-full">
          <div className="flex flex-row w-1/2 items-center gap-2">
            <CiSearch className="h-5 w-5" />
            <form onSubmit={handleSearch}>
              <input
                className="focus:outline-none w-full py-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
            </form>
          </div>
          <button
            className="text-xl font-bold text-gray-700 hover:text-gray-900"
            onClick={() => setSearchBar(false)}
          >
            <IoClose className="text-gray-500" />
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
