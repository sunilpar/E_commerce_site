import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function Cart() {

 const productIds = useSelector((state) => state.cart.productIds);
 console.log(productIds);
 console.log(typeof productIds,"aaaaa");

  return (
    <div>
    </div>
  )
}

export default Cart