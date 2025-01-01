import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import appwriteService from "../appwrite/config";
import CartItem from '../components/CartItem';
import { Query } from "appwrite";

function Cart() {
  const productIds = useSelector((state) => state.cart.productIds);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (productIds.length > 0) {
      appwriteService.getProducts([Query.contains("Product_Id", productIds)])
        .then((response) => {
          if (response) {
            setProduct(response.documents);
          }
        });
    } else {
      setProduct([]);
    }
  }, [productIds]);

  return (
    <div className='w-full py-8 min-h-screen '>
      <div className='flex flex-col flex-wrap justify-center '>
        {product.map((product) => (
          <div className=''>
            <CartItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
