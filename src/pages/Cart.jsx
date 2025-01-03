import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearOrder} from "../store/orderSlice.js";
import appwriteService from "../appwrite/config";
import CartItem from "../components/CartItem";
import { clearCart } from "../store/cartSlice.js";
import { Query } from "appwrite";
import Button from "../components/Button";
import Input from "../components/Input.jsx";

function Cart() {
  const productIds = useSelector((state) => state.cart.productIds);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.orders);
  useEffect(() => {
    if (productIds.length > 0) {
      appwriteService
        .getProducts([Query.contains("Product_Id", productIds)])
        .then((response) => {
          if (response) {
            setProduct(response.documents);
          }
        });
    } else {
      setProduct([]);
    }
  }, [productIds]);

  
  let Subtotal = 0;
  for (let i = 0; i < orders.length; i++) {
    Subtotal=Subtotal + orders[i].quantity * orders[i].price;
  }
  let taxes =(Subtotal*0.14);

  return (
    <div className="w-full py-8 min-h-screen ">
      <div className="z-10 absolute text-4xl font-extrabold opacity-0 lg:opacity-100 text-iphone-white top-[50px] left-[40px] mt-4">
        <h1>Cart</h1>
      </div>
      <div className="absolute sm:top-[50px] sm:right-[40px] mt-4 top-[150px] right-[40px]">
        <Button
          className="bg-clear-red text-"
          onClick={() => dispatch(clearCart(),clearOrder())}
        >
          Clear Cart
        </Button>
      </div>
      <div className="absolute top-[100px] right-[40px] sm:top-[50px] sm:right-[160px] mt-4">
        <Button className=" ">Orders</Button>
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

      {/* orders */}
      <div className="  bg-iphone-black text-iphone-white rounded-lg flex flex-col justify-center md:mx-[200px] lg:mx-[390px] p-3 opacity-85 mb-6">
        <table className="w-full text-sm text-left">
          <tbody>
            <tr className="  ">
              <th
                scope="row"
                className="px-6 font-bold py-4  text-gray-900 whitespace-nowrap"
              >
                Subtotal
              </th>
              <td className="px-6 py-4 flex justify-end">Rs {Subtotal}</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap "
              >
                Taxes: Vat 14%
              </th>
              <td className="px-6 py-4 flex justify-end">Rs {taxes.toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3 flex justify-end ">Rs {Subtotal+taxes} </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* payment */}
      <div className="">
        <button className="py-4 px-6 rounded-lg  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-300 hover:duration-300  text-3xl font-extrabold opacity-85 hover:opacity-80 ">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
