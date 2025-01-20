import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import service from "../backend/config";
import reviewService from "../backend/review";


function Test() {

 //for get review
  // const fetchData = async () => {
  //   const ProductId="67878d973f9a6e7a8cd9cce9";
  //   const getproducts = await reviewService.getReviews(ProductId)
  //   getproducts.data.map((data)=>console.log(data.UserName,"username",data.UserAvatar,"avatar",data.Review,"review"))
  // }
  
  const fetchData = async () => {
    const ProductId="67878d973f9a6e7a8cd9cce9";
    const getproducts = await reviewService.getReviews(ProductId)
    getproducts.data.map((data)=>console.log(data.UserName,"username",data.UserAvatar,"avatar",data.Review,"review"))
  }


  return (
    <div className="text-iphone-white">
      Test
      <button
        className="bg-iphone-black text-iphone-white m-5"
        onClick={fetchData}
      >
        fetch data
      </button>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default Test;









