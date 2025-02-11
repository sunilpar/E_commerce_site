import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import service from "../backend/config.js";
import CartItem from "../components/cart/CartItem.jsx";
import Input from "../components/Input.jsx";
import Order from "../components/cart/Order.jsx";

function Cart() {
  const productIds = useSelector((state) => state.cart.productIds);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.orders);
  
  

  const strIds = Array.isArray(productIds)
  ? productIds.map(item => `"${item}"`).join(',')
  : productIds;
  useEffect(() => {
    (async () => {
      if (productIds.length > 0) {
        try {
          const getproducts = await service.getProductsByid(strIds);
          setProduct(getproducts.data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
      }else{
        setProduct([]);
      }
      
    })();
  }, [productIds],[strIds]);

  
  let Subtotal = 0;
  for (let i = 0; i < orders.length; i++) {
    Subtotal=Subtotal + orders[i].quantity * orders[i].price;
  }
  let taxes =(Subtotal*0.14);

  return (
    <div className="w-full py-8 min-h-screen ">
      <div className="z-10 absolute text-4xl font-extrabold opacity-0 xl:opacity-100 text-iphone-white top-[50px] left-[200px] mt-4">
        <h1>Cart</h1>
      </div>
      <div className="flex flex-col flex-wrap justify-center ">
        {product.map((product) => (
          <div className="">
            <CartItem product={product} />
          </div>
        ))}
      </div>
      {/* add coupon */}
      <div className=" mt-28 sm:mt-0 mb-6">
        <Input
          placeholder="Add Coupon or Gift Cart "
          className="w-[200px] sm:w-[400px] opacity-50 hover:opacity-80"
        ></Input>
      </div>

      <Order />

    </div>
  );
}

export default Cart;
