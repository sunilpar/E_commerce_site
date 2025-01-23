// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import reviewService from "../backend/review";
// import AxiosHelper from "../utils/axios.helper";
// import { useSelector, useDispatch } from "react-redux";
// import { v4 as uuidv4 } from 'uuid';
// import CryptoJS from 'crypto-js';


// function Test() {
//   let price = 10;
//   let uuid = uuidv4();
//   let message =`total_amount=${price},transaction_uuid=${uuid},product_code=EPAYTEST`
//   let key = "8gBm/:&EnhH.1/q" 
//   var hash = CryptoJS.HmacSHA256(message, key);
//   var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

//   return (
//     <div className="text-iphone-white">
//       Test
//       <form action="https://dev.khalti.com/api/v2/epayment/initiate/" method="POST">
//           <input type="hidden" id="return_url" name="return_url" value="http://localhost:5173/KhaltiPayment" required></input>
//           <input type="hidden" id="website_url" name="website_url" value ="http://localhost:5173" required></input>
//           <input type="hidden" id="amount" name="amount" value={price*100} required></input>
//           <input type="hidden" id="purchase_order_id" name="purchase_order_id" value={uuid} required></input>
//           <input type="hidden" id="purchase_order_name" name="purchase_order_name" value ="Books" required></input>
//           <input value="Submit" type="submit"></input>
//       </form>
//     </div>
//   );
// }

// export default Test;


import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function KhaltiPaymentForm() {
  const [response, setResponse] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault(); 

    
    const uuid = uuidv4();

    const data = {
      return_url: "http://localhost:5173/KhaltiPayment",
      website_url: "http://localhost:5173",
      amount: 10,
      purchase_order_id: uuid,
      purchase_order_name: "Books",
    };

    try {
      const res = await fetch("https://dev.khalti.com/api/v2/epayment/initiate/", {
        method: "POST",
        headers: {
          "Authorization": "key live_secret_key_4846eeafae8c4426a7dbe9e54404d650", 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json(); 
      console.log("Transaction Response:", result);
      setResponse(result); 
    } catch (error) {
      console.error("Error:", error);
      setResponse({ error: "Failed to process the transaction" });
    }
  };

  return (
    <div className="App text-iphone-white">
      <h1>Khalti Payment Form</h1>
      <form onSubmit={handlePayment}>
        <button type="submit" className="submit-btn">
          Pay Now
        </button>
      </form>

      {/* Display the transaction response */}
      {response && (
        <div className="response">
          <h2>Transaction Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default KhaltiPaymentForm;










