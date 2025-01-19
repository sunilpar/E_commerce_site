import React, { useState, useEffect } from "react";
import Searchbook from "../components/search/Searchbook";
import service from "../backend/config";

function Search({ query }) {
  const [product, setProduct] = useState([]);

  console.log(typeof query, query, "query");

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
    <div className="w-full py-8">
      <div className="flex flex-row flex-wrap justify-center">
        {product.map((productItem) => (
          <div key={productItem._id} className="w-fit h-fit">
            <Searchbook {...productItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
