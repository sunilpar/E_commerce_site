import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button.jsx";
import { removeOrder, addOrder } from "../../store/orderSlice.js";
import { removeFromCart } from "../../store/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";

function CartItem({ product }) {
  const Title = product.Title;
  const CoverImage = product.CoverImage;
  const id = product._id;
  const Pdf = product.Pdf;
  const Audio = product.Audio;
  let price = Audio;
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  const [selectedOption, setSelectedOption] = useState("Audio book");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const [quantity, setQuantity] = useState(1);

  const handleQdown = () => {
    if (quantity == 1) {
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleQup = () => {
    if (quantity == 10) {
    } else {
      setQuantity(quantity + 1);
    }
  };

  return product ? (
    <div className=" mb-6 flex justify-start md:justify-center flex-wrap gap-7  ">
      <Link to={`/post/${id}`} className="flex flex-row  h-fit">
        <img
          className=" max-w-[210px] max-h-[300px] rounded-lg object-cover hover:scale-105 hover:duration-300"
          src={CoverImage}
          alt=""
        />
      </Link>

      <div className=" flex flex-col text-iphone-white ">
        {/* ttile section */}
        <div className="  w-[500px] flex  text-3xl text-left sm:text-4xl font-extrabold mb-6 ">
          {Title}
        </div>

        {/* select section */}
        <div>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="px-1 py-2 rounded-xl outline-none bg-iphone-black text-center w-full text-iphone-white max-w-[300px] flex sm:justify-start mb-6"
          >
            <option value="Pdf">Pdf</option>
            <option value="Audio book">Audio book</option>
          </select>
        </div>

        {/* price section */}
        <div className=" text-md italic thin  flex justify-start mb-6">
          Rs {(selectedOption == "Pdf" ? Pdf : Audio) * quantity}
          <div className="pl-3 pr-1">
            <svg
              className="w-[20px] h-[20px]"
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsslink="http://www.w3.org/1999/xlink"
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
          <div>4.5</div>
        </div>

        {/* quantity section */}
        <div className=" flex align-middle gap-4 mb-6">
          <button
            onClick={() => handleQdown()}
            className={`  w-[20px] h-[20px] hover:scale-105`}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
              fill=""
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>arrow-left-circle</title>{" "}
                <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  sketch:type="MSPage"
                >
                  {" "}
                  <g
                    id="Icon-Set"
                    sketch:type="MSLayerGroup"
                    transform="translate(-256.000000, -1087.000000)"
                    fill="#F5F5F7"
                  >
                    {" "}
                    <path
                      d="M279,1102 L268.414,1102 L272.536,1097.88 C272.926,1097.49 272.926,1096.86 272.536,1096.46 C272.145,1096.07 271.512,1096.07 271.121,1096.46 L265.464,1102.12 C265.225,1102.36 265.15,1102.69 265.205,1103 C265.15,1103.31 265.225,1103.64 265.464,1103.88 L271.121,1109.54 C271.512,1109.93 272.145,1109.93 272.536,1109.54 C272.926,1109.15 272.926,1108.51 272.536,1108.12 L268.414,1104 L279,1104 C279.552,1104 280,1103.55 280,1103 C280,1102.45 279.552,1102 279,1102 L279,1102 Z M272,1117 C264.268,1117 258,1110.73 258,1103 C258,1095.27 264.268,1089 272,1089 C279.732,1089 286,1095.27 286,1103 C286,1110.73 279.732,1117 272,1117 L272,1117 Z M272,1087 C263.164,1087 256,1094.16 256,1103 C256,1111.84 263.164,1119 272,1119 C280.836,1119 288,1111.84 288,1103 C288,1094.16 280.836,1087 272,1087 L272,1087 Z"
                      id="arrow-left-circle"
                      sketch:type="MSShapeGroup"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
          <div>{quantity}</div>
          <button
            onClick={() => handleQup()}
            className={`  w-[20px] h-[20px] hover:scale-105`}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>arrow-right-circle</title>{" "}
                <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  sketch:type="MSPage"
                >
                  {" "}
                  <g
                    id="Icon-Set"
                    sketch:type="MSLayerGroup"
                    transform="translate(-308.000000, -1087.000000)"
                    fill="#F5F5F7"
                  >
                    {" "}
                    <path
                      d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
                      id="arrow-right-circle"
                      sketch:type="MSShapeGroup"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>

        {/* buynow section */}
        <div className=" mb-6 py-2 flex flex-row justify-start flex-wrap gap-7 w-[370px] h-[50px] font-bold ">
          <Button
            onClick={() =>
              dispatch(
                addOrder({
                  id,
                  quantity,
                  price: selectedOption == "Pdf" ? Pdf : Audio,
                })
              )
            }
            className="px-6 py-2 extra-bold "
          >
            Buy Now
          </Button>

          <button
            onClick={() => {
              removeHandler(id), dispatch(removeOrder({ id, quantity, price }));
            }}
            className="ml-[8rem] hover:scale-105"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10 12V17"
                  stroke="#F5F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 12V17"
                  stroke="#F5F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="#F5F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="#F5F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#F5F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-iphone-white">No item in cart</div>
  );
}

export default CartItem;
