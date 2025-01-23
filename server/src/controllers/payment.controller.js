// import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import axios from "axios";
// import qs from "qs";


// const khaltiPayment = asyncHandler(async (req, res) => {
//       const { amount, purchase_order_id, customer_info} = req.body;
  
//       if (!amount || !purchase_order_id ) {
//         throw new ApiError(400, "All fields are required to make payment request ");
//       }
//       const data={
//         return_url: "http://localhost:5173/KhaltiPayment",
//         website_url: "http://localhost:5173",
//         amount: amount,
//         purchase_order_id: purchase_order_id,
//         purchase_order_name: "Books",
//         customer_info: customer_info?customer_info:"",
//       }

       
//     const config = {
//         method:"post",
//         url: "https://dev.khalti.com/api/v2/epayment/initiate/",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "4846eeafae8c4426a7dbe9e54404d650" 
//         },
//         data: qs.stringify(data),  
//       };
    
//       try {
//         const response = await axios.request(config);
//         console.log(response.data);
        
//       } catch (error) {
//         throw error;  
//       }
  
//       return res
//         .status(201)
//         .json(new ApiResponse(201, response, "response from khalti"));
//   });



// export {khaltiPayment}


import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import axios from "axios";

const khaltiPayment = asyncHandler(async (req, res) => {
  const { amount, purchase_order_id, customer_info } = req.body;

  // Validate required fields
  if (!amount || !purchase_order_id) {
    throw new ApiError(400, "All fields are required to make payment request");
  }

  // Data to send in the POST request
  const data = {
    return_url: "http://localhost:5173/KhaltiPayment",
    website_url: "http://localhost:5173",
    amount: amount, // Ensure the amount is in paisa (e.g., 1000 = 10 NPR)
    purchase_order_id: purchase_order_id,
    purchase_order_name: "Books", // You can customize this as needed
    customer_info: customer_info ? customer_info : {}, // Provide default if not passed
  };

  // Axios configuration
  const config = {
    method: "post",
    url: "https://dev.khalti.com/api/v2/epayment/initiate/",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Key live_secret_key_4846eeafae8c4426a7dbe9e54404d650", // Replace with your actual secret key
    },
    data: data, // No need for qs.stringify as the API accepts JSON
  };

  try {
    // Sending request to Khalti API
    const response = await axios.request(config);
    
    // Return response to the client
    return res
      .status(201)
      .json(new ApiResponse(201, response.data, "Response from Khalti"));
  } catch (error) {
    console.error("Error with Khalti Payment API:", error.message);

    // Handle errors from the API
    if (error.response) {
      throw new ApiError(
        error.response.status,
        error.response.data.error || "Failed to initiate payment with Khalti"
      );
    }

    // General errors
    throw new ApiError(500, "Internal server error");
  }
});

export { khaltiPayment };
