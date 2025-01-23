import React,{useEffect,useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';

function Sucess() {
  const [searchParams] = useSearchParams();
  const data = searchParams.get('data');
  const obj= JSON.parse(atob(data));
  console.log(obj);
  
  let key = "8gBm/:&EnhH.1/q"
  let message =`transaction_code=${obj.transaction_code}0,
                status=${obj.status},
                total_amount=${obj.total_amount},
                transaction_uuid=${obj.transaction_uuid},
                product_code=${obj.product_code},
                signed_field_names=${obj.signed_field_names}`
  var hash = CryptoJS.HmacSHA256(message, key);
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  console.log(obj.signature,"hash from esewa");
  console.log(hashInBase64,"hash form encoding");
  const isvalid = (obj.signature==hashInBase64)

  

  
  return (
    <div className='text-3xl text-iphone-white flex min-h-screen flex-col justify-center items-center'>
      E-sewa Payment complete <br/>
      {isvalid?"true":"false"}
      <Link to="/">
       <button className='mt-6 py-4 px-6 rounded-lg  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-300 hover:duration-300  text-3xl font-extrabold opacity-85 hover:opacity-80 '>
        Home
      </button>
      </Link>
     
    </div>
  )
}

export default Sucess