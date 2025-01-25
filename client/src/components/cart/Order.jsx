import React,{useState}from 'react'
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import KhaltiPayment from '../../pages/KhaltiPayment';

function Order() {
   const orders = useSelector(state => state.order.orders);
   let Subtotal = 0;
   for (let i = 0; i < orders.length; i++) {
     Subtotal=Subtotal + orders[i].quantity * orders[i].price;
   }
   let taxes =(Subtotal*0.14);
 const isEmpty = Subtotal === 0?true:false;

 let price=Subtotal+taxes;

 



//esewa
 let uuid = uuidv4();
let message =`total_amount=${Subtotal+taxes},transaction_uuid=${uuid},product_code=EPAYTEST`
let key = "8gBm/:&EnhH.1/q" 
var hash = CryptoJS.HmacSHA256(message, key);
var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);


//khalti

  return (<>
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
      {!isEmpty && <div className="mb-6">
        <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
          <input type="hidden" id="amount" name="amount" value={price} required></input>
          <input type="hidden" id="tax_amount" name="tax_amount" value ="0" required></input>
          <input type="hidden" id="total_amount" name="total_amount" value={price} required></input>
          <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={uuid} required></input>
          <input type="hidden" id="product_code" name="product_code" value ="EPAYTEST" required></input>
          <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required></input>
          <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required></input>
          <input type="hidden" id="success_url" name="success_url" value="http://localhost:5173/Sucess" required></input>
          <input type="hidden" id="failure_url" name="failure_url" value="http://localhost:5173/Failure" required></input>
          <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required></input>
          <input type="hidden" id="signature" name="signature" value={hashInBase64} required></input>
          <input value="Pay Through Esewa" className='py-4 px-6 rounded-lg  bg-[#60bb46] text-iphone-black  hover:bg-[#48873d] hover:text-iphone-black duration-300 hover:duration-300  text-3xl font-extrabold opacity-85 hover:opacity-80 ' type="submit"></input>
      </form>
        </div>}
        {/* {!isEmpty &&
          <div className="mb-6">
        <button  className="py-4 px-6 rounded-lg  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-300 hover:duration-300  text-3xl font-extrabold opacity-85 hover:opacity-80 ">
          Pay Through Khalti
        </button>
      </div>
        } */}
      
  </>)
}

export default Order