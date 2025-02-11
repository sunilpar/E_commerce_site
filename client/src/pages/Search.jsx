import React, { useState, useEffect } from "react";
import Searchbook from "../components/search/Searchbook.jsx";
import service from "../backend/config.js";
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
    </div>
  );
}

export default Search;
