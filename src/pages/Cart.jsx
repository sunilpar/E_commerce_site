
import React, {useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import appwriteService from "../appwrite/config";
import CartItem from '../components/CartItem'
import { Query} from "appwrite";

function Cart() {

 const productIds = useSelector((state) => state.cart.productIds);
 const [product, setProduct] = useState([]) 
 useEffect(() => {
     appwriteService.getProducts([Query.contains("Product_Id",productIds)]).then((product) => {
         if (product) {
             setProduct(product.documents);
         }
     })
 }, [])

 return (
     <div className='w-full py-8 min-h-screen '>
     <div  className='flex flex-col flex-wrap justify-center '>
     {product.map((product) => (
         <div className='  '>
             <CartItem {...product}/>
         </div>
     ))}
         </div>
 </div>
)
}

export default Cart