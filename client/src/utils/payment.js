import axios from "axios";
import qs from "qs";


const PaymentService = async ( price, uuid)=> {
    if (!price || !uuid) {
      console.log("Can't make API call without amt and uuid");
      return;
    }
    const data={
      return_url: "http://localhost:5173/KhaltiPayment",
      website_url: "http://localhost:5173",
      amount: price,
      purchase_order_id: uuid,
      purchase_order_name: "Books",
    }
    
    
  
    const config = {
      method:"post",
      url: "https://dev.khalti.com/api/v2/epayment/initiate/",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "4846eeafae8c4426a7dbe9e54404d650" 
      },
      data: qs.stringify(data),  
    };
  
    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw error;  
    }
  };
  
  export default PaymentService;
  