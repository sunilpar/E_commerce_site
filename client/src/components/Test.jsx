import React, { useEffect,usestate } from "react";
import axios from "axios";
import qs, { stringify } from "qs";
import AxiosInstance from "../utils/axios.helper";

function Test() {
  let data = qs.stringify({
    id: "6788c83e647ed14ed5b57899",
  });
  

  const response = AxiosInstance("/api/product/get-product",data,"post");
  // const response = <AxiosInstance url="/api/product/get-product" data={data} method="post" />
  
  console.log(response?.data,typeof response,"response");
  

  return (
    <div className="text-iphone-white">
      Test
      {/* <img src={response} alt="" /> */}
    </div>
  );
}

export default Test;
