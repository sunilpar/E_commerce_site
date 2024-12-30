import React, { useEffect,useState } from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import Button from "./Button";
import Select from "./Select.jsx";
import { addToCart } from "../store/cartslice.js";
import { useSelector, useDispatch } from "react-redux";
function Book({ $id, Product_Title, Cover_Img, Price }) {
  const title = Product_Title;
  const fileid = Cover_Img;
  const id = $id;
  const dispatch = useDispatch(); 
   const handleCart = ($id) => {
     dispatch(addToCart($id));
  };

  return (
    <div className=" mb-6 flex justify-start md:justify-center flex-wrap gap-7  ">
        <Link to={'/'} className="flex flex-row  h-fit">
            <img
                    className=" max-w-[210px] max-h-[300px] rounded-lg object-cover"
                    src={appwriteService.getFilePreview(fileid)}
                    alt=""
                />
        </Link>
        <div className=" flex flex-col text-iphone-white ">
            <div className="  w-[500px] flex  text-3xl sm:text-4xl font-extrabold mb-6 ">
                {title}
                {/* asdasdasdasdasd dsadasdashjkdhaksjhd asdjhakjshdkjashdkjas askdhkasjhdkajshdkjahs */}
            </div>
            <div>
                <Select options={["Pdf","Audio book"]} className="text-iphone-white max-w-[300px] flex sm:justify-start mb-6"></Select>
            </div>
            <div className=" text-md italic thin  flex justify-start">
                Rs {Price}
                <div className="pl-3 pr-1">
                  <svg
                    className="w-[20px] h-[20px]"
                    version="1.0"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="64px"
                    height="64px"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                    xml:space="preserve"
                    fill="#F5F5F7"
                    stroke="#F5F5F7"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          fill="#F5F5F7"
                          d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701 l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478 M31.998,0 c-0.775,0-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719 c0.302,0.166,0.636,0.25,0.968,0.25c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704 l14.294-14.657c0.523-0.537,0.703-1.321,0.465-2.031c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0L31.998,0z"
                        ></path>{" "}
                        <path
                          fill="#F5F5F7"
                          d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701 l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div>4.5</div>
            </div>
            <div className=" flex align-middle">
                <button className=" text-4xl  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-150 hover:duration-150 rounded-lg">-</button>
            </div>
            

        </div>

    </div>
  );
}

export default Book;
