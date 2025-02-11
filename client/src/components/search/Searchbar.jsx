import React, { useState } from "react";
import Button from "../Button.jsx";
import { Link } from "react-router-dom";
// import Searchsuggestion from "./Searchsuggestion";
function Searchbar() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="w-full">
        <form className="flex flex-row rounded-lg w-full   ">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            className=" px-2 py-2 pl-[2.5rem] rounded-l-full outline-none duration-200 w-full  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:bg-opacity-35   hover:duration-150 "
          />

          <div className={`${query ? "active" : "disabled"}`}>
            <Link to={`/Search/${query}`}>
              <Button
                type="submit"
                className="rounded-r-full hover:bg-opacity-35"
              >
                <svg
                  className=""
                  width="20px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
                      fill="#F5F5F7"
                    ></path>{" "}
                  </g>
                </svg>
              </Button>
            </Link>
          </div>
        </form>
        {/* <div>{query && <Searchsuggestion query={query} />}</div> */}
      </div>
    </>
  );
}

export default Searchbar;
