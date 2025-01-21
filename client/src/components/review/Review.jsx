import React, { useState, useEffect } from "react";
import reviewService from "../../backend/review";
import Reviewpost from "./Reviewpost";

import { Link } from "react-router-dom";
import Button from "../Button";
import { use } from "react";

function Review({ id }) {
  const [review, setReview] = useState([]);
  useEffect(() => {
    if (!id) return;
    const fetchReviews = async () => {
      try {
        const getreviews = await reviewService.getReviews(id.id);
        setReview(getreviews.data);
      } catch (error) {
        console.error("Error while getting reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return review.length > 0 ? (
    <div className="text-iphone-white flex flex-col flex-wrap gap-5 ">
      {review.map((review) => (
        <div className="flex flex-row  justify-center rounded-xl h-fit flex-wrap ">
          <div className="bg-iphone-black p-6 rounded-lg flex flex-row flex-wrap">
            <div className="w-10 h-10 bg-iphone-white rounded-full mr-3">
              <img src={review.UserAvatar} alt="" />
            </div>
            <div className="">
              <div className="text-left font-outfit text-lg font-bold">
                {review.UserName}
              </div>
              <div className="text-left flex gap-1 ">
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
                {review.Star ? review.Star : 0}
              </div>
              <div className="text-left w-[500px] h-fit">{review.Review}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <div className="flex justify-start font-outfit text-left text-2xl font-bold w-[596px]">Write Your Review</div>
      </div>
      <div>
        <Reviewpost ProductId={id.id} />
      </div>
    </div>
  ) : (
    <div className="text-iphone-white font-outfit font-bold text-lg mt-[4rem] justify-center flex flex-col">
      <div>
        <div className=" rounded-xl flex justify-center p-[2rem] ">
          {" "}
          😔No reviews yet😔
        </div>
        <div className="flex justify-center">
        <div className="flex justify-start font-outfit text-left text-2xl font-bold w-[596px] mb-10">Write Your Review</div>
      </div>
        <div>
          <Reviewpost ProductId={id.id} />
        </div>
      </div>
    </div>
  );
}

export default Review;
