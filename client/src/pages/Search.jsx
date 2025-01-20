import React, { useState, useEffect } from "react";
import Searchbook from "../components/search/Searchbook";
import service from "../backend/config";
import { useParams } from "react-router-dom";

function Search() {
  const [product, setProduct] = useState([]);

  const slug = useParams();
  const query = slug.id;

  useEffect(() => {
    (async () => {
      try {
        const getproducts = await service.searchPage(query);
        setProduct(getproducts.data);
      } catch (error) {
        console.error("Error while searching products:", error);
      }
    })();
  }, [query]);

  return (
    <div className="w-full py-8 flex justify-center">
      <div className="flex flex-row flex-wrap justify-center gap-5  w-[1000px] ">
        {product.map((productItem) => (
          <div key={productItem._id} className="w-fit h-fit ">
            <Searchbook {...productItem} />
          </div>
        ))}
      </div>
      {product.length === 0 && (
        <div className="flex flex-row flex-wrap justify-center align-center min-h-screen">
          <div className="w-fit h-fit">
            <h1 className="text-2xl font-bold text-iphone-white">
              <div className="mb-6">
              <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-document-error" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>731</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(2.000000, 0.000000)" fill="#434343"> <path d="M9.016,3.984 L13.997,3.984 L9.016,0.016 L9.016,3.984 Z" class="si-glyph-fill"> </path> <path d="M4.207,11.086 L2.5,12.793 L0.793,11.086 L0.086,11.793 L1.793,13.5 L0.086,15.207 L0.793,15.914 L2.5,14.207 L4.207,15.914 L4.914,15.207 L3.207,13.5 L4.914,11.793 L4.207,11.086 Z" class="si-glyph-fill"> </path> <path d="M7.969,5.016 L7.969,0.011 L2.034,0.011 L2.034,10.411 L2.5,10.877 L4.408,8.971 L7.031,11.594 L5.125,13.5 L7.595,15.969 L13.977,15.969 L13.977,5.016 L7.969,5.016 Z" class="si-glyph-fill"> </path> </g> </g> </g></svg>
              </div>
              💀 No Books Found 💀
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
