import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";
function Searchbook({ Title, CoverImage, Pdf, Audio, _id ,Description}) {
  const id = _id;
  const dispatch = useDispatch();
  const handleCart = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div>
      {/* w-[780px] h-[346px] */}
      <div className="">
        {/* single book */}
        <div className="w-[220px] min-h-[374px]  rounded-xl p-2 flex items-center flex-col hover:scale-105">
        <div className="w-[210px] h-[300px]   mb-7  flex ">
          {CoverImage ? (
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg p-6 pt-72 pb-8  max-w-sm mx-auto mt-2     ">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={CoverImage}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-full-black  opacity-80"></div>
              <Link to={`/post/${id}`}>
                <div className="absolute inset-0 "></div>
              </Link>
              <h3 className="z-10 mt-3 flex  text-lg bold text-left font-bold text-iphone-white top-o ">
                {Title || "Untitled"}
                <br />
              </h3>

              <h3 className="z-10 mt-3 mb-3 flex text-sm italic thin font-extralight text-iphone-white">
                Rs {Pdf || "Untitled"} <br />
                <div className="pl-3 pr-1">
                  <svg
                    className="w-[20px] h-[20px]"
                    version="1.0"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64px"
                    height="64px"
                    viewBox="0 0 64 64"
                    enableBackground="new 0 0 64 64"
                    xmlSpace="preserve"
                    fill="#F5F5F7"
                    stroke="#F5F5F7"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                <div className="font-bold">
                  {Math.floor(Math.random() * 5) + 1}
                </div>
                <button
                  className="ml-6 rounded-lg px-[5px] py-[2px]  bg-iphone-black text-iphone-white hover:bg-full-black hover:text-iphone-black duration-150 hover:duration-150"
                  onClick={() => handleCart(id)}
                >
                  <svg
                    className="w-[20px] h-[20px]"
                    fill="#F5F5F7 "
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64px"
                    height="64px"
                    viewBox="0 0 902.86 902.86"
                    xmlSpace="preserve"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                    stroke="#F5F5F7"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="1.8057200000000002"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path>{" "}
                          <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
              </h3>
            </article>
          ) : (
            <div className="">No Image Available</div>
          )}
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Searchbook;
