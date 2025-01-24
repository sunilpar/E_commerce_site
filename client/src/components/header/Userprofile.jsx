import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logoutbtn from "./Logoutbtn";

function Userprofile() {
  const userData = useSelector((state) => state.auth.userData);
  const [isclick, setisclick] = useState(false);
  

  const handleClick = () => {
    setisclick(!isclick);    
  };

  return (
    <>
    <div className="flex sm:flex-row flex-col  sm:w-[200px] ml-3">
        <div className="">
        <button onClick={() => handleClick()}>
          <img
            className="max-w-[60px] max-h-[40px]  bg-full-white rounded-full "
            src={userData.data.Avatar}
            alt=""
          />
        </button>
      </div>

      <div className="w-50 ml-4">
        {isclick && 
          <Logoutbtn />}
      </div>
    </div>
      
    </>
  );
}

export default Userprofile;
