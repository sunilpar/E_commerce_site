import React, { useState, useEffect } from "react";
import service from "../../backend/config.js";
import Book from "./Book.jsx";

function Product({ productTitles }) {
  const [product, setProduct] = useState([]);

  const strTitles = Array.isArray(productTitles)
    ? productTitles.map((item) => `"${item}"`).join(",")
    : productTitles;

  useEffect(() => {
    (async () => {
      try {
        const getproducts = await service.getProducts(strTitles);
        setProduct(getproducts.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, [strTitles]);

  return (
    <div className="w-full py-8">
      <div className="flex flex-row flex-wrap justify-center">
        {product.map((productItem) => (
          <div key={productItem._id} className="w-fit h-fit">
            <Book {...productItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
