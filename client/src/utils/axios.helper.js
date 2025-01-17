import React, { useEffect } from "react";
import axios from "axios";

const AxiosHelper =(url,data,method)=>{
    if (!url || !data || !method) {
        return console.log("cant api call without all fields");
    }
  const methods = String(method) ;
  const methodurl = String(url) ;
  const methoddata = String(data) ;

  let config = {
    method: methods,
    url: methodurl,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: methoddata,
  };
 
  // useEffect(() => {
  //   ( () => {
  //      axios
  //       .request(config)
  //       .then((response) => {
  //         console.log(response.data.data,"from axios instance");
  //         return response.data.data
  //       })
  //       .catch((error) => {
  //         console.log(error, "from axios");
  //         return 
  //       });
  //   })();
  // }, []);

  
}

export default AxiosHelper