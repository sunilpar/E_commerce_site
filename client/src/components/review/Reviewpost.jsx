import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import reviewService from "../../backend/review";
import Button from "../Button";
import { Link } from "react-router-dom";

function Reviewpost(ProductId) {
  const userdata = useSelector((state) => state.auth.userData);
  if (!ProductId) {
    return null;
  }

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      ProductId: ProductId.ProductId,
      Comment: "",
      star: 0,
    },
  });

  const currentRating = watch("star");

  const submit = async (data) => {
    const dbPostReview = await reviewService.createReview({ ...data });

    if (dbPostReview) {
      toast.success("Review created successfully");
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => setValue("star", i)}
          style={{
            cursor: "pointer",
            color: i <= currentRating ? "#FFD700" : "#E0E0E0",
            fontSize: "24px",
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return userdata ? (
    <>
      <div className="flex justify-center">
        <div className="flex flex-row gap-3 justify-start w-[600px]">
          <div className="w-10 h-10 rounded-full bg-iphone-white">
            <img src={userdata.data.Avatar} alt="" />
          </div>
          <div className="flex flex-col justify-start ">
            <div className="text-left mb-6">{userdata.data.FullName}</div>
            <div>
              <form
                onSubmit={handleSubmit(submit)}
                className="flex flex-col gap-3 text-iphone-white"
                action=""
              >
                <input
                  type="text"
                  placeholder="Write your review.........."
                  className="focus:outline-none text-iphone-white px-4   bg-full-black border-b-2 border-iphone-white border-opacity-25 hover:border-opacity-100 hover:duration-200 w-[500px] focus:border-full-black foucus:border-opacity-0"
                  {...register("Comment", { required: true })}
                />
                <div className="flex flex-col">
                  <div className="flex gap-2">{renderStars()}</div>
                  <input
                    type="hidden"
                    {...register("star", { required: true })}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 rounded-full text-xl text-right "
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        className="text-sm"
      />
    </>
  ) : (
    <div className="flex justify-center  ">
      <div className="">
        <span className="mr-1 underline hover:text-skin-dark hover:duration-200">
            <Link to={"/login"}>
            Login 
            </Link>
        </span>
         to write review</div>
    </div>
  );
}

export default Reviewpost;
