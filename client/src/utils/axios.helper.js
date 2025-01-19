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
