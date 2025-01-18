
// import axios from "axios";

// const AxiosHelper =async(url,data,method)=>{
//     if (!url || !method) {
//         return console.log("cant api call without all fields");
//     }
//   const methods = String(method) ;
//   const methodurl = String(url) ;
//   // const methoddata = String(data) ;

//   let config = {
//     method: methods.toLowerCase(),
//     url: methodurl,
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     data: data,
//   }; 

//   try {
//      return await axios.request(config);
//     console.log(response.data.data,"from axios instance");
//   } catch (error) {
//     console.log(error, "from axios");
//     return
    
//   }
// }

// export default AxiosHelper



import axios from "axios";
import qs from "qs";

const AxiosHelper = async (url, data = {}, method = "get") => {
  if (!url || !method) {
    console.log("Can't make API call without URL and method");
    return;
  }

  const config = {
    method: method.toLowerCase(),
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),  
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error from axios:");
    throw error;  
  }
};

export default AxiosHelper;
