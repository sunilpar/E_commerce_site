import React from "react";
import Product from "../components/product/Product.jsx"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../backend/config";
import Button from "../components/Button";
import conf from "../conf/conf";
import { addToCart } from "../store/cartSlice.js";
import { Link } from "react-router-dom";
import Review from "../components/review/Review.jsx";
import RelatedProducts from "../components/search/RelatedProducts.jsx";

function Post() {
  const navigate = useNavigate();
  const slug = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const isAdmin = userData && userData.$id == conf.adminId ? true : undefined;

  const [post, setPost] = useState(null);
  useEffect(() => {
    if (slug) {
      service
        .getProduct(slug.id)
        .then((post) => {
          if (post) setPost(post.data);
          else navigate("/");
        });
    } else navigate("/");
  }, [slug, navigate]);

  const description = post?.product.Description;
  const fileid = post?.product.CoverImage;
  const Pdf = post?.product.Pdf;
  const Audio = post?.product.Audio;
  const title = post?.product.Title;
  const Tags = post?.product.Tags;
  const id = post?.product._id;
  const avgstar = post?.avgstar;
  let price=Pdf;

  
  const [selectedOption, setSelectedOption] = useState('Audio book');
  
  const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

  const handleCart = (id) => {
    dispatch(addToCart(id));
 };

  return post ? (
    <div className=" flex flex-col justify-center min-h-screen flex-wrap mt-6 ">
      {/* img and titles */}
      <div className="flex flex-col sm:flex-row justify-center flex-wrap">
        <div className="mb-6 flex flex-wrap ">
          <img
            className="h-[300px] w-[200px] lg:w-[343px] lg:h-[541px] rounded-md"
            src={fileid}
            alt=""
          />
        </div>
        <div className="flex flex-col sm:justify-space-between ml-5 mt-6 w-[339px]">
          <div className="w-[340px] flex flex-wrap">
            <h1 className="text-4xl text-left font-extrabold text-iphone-white mb-24">
              {title}
            </h1>
          </div>
          <div className=" flex flex-col text-iphone-white mb-10 ">
            {/* select section */}
            <div>
              <select 
               value={selectedOption}
                onChange={handleSelectChange}
                className="px-1 py-2 rounded-xl outline-none bg-iphone-black text-center w-full text-iphone-white max-w-[300px] flex sm:justify-start mb-6" >
                <option value="Pdf">Pdf</option>
                <option value="Audio book">Audio book</option>
              </select>
            </div>

            {/* price section */}
            <div className=" text-xl italic thin  flex justify-start mb-6 ml-3">
              Rs {selectedOption=="Pdf"?Pdf:Audio}
            </div>
            <div className="pl-3 pr-1 flex flex-row">
              <svg
                className="w-[30px] h-[30px]"
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
              <div className="ml-2 text-xl">{avgstar}</div>
            </div>
          </div>

          <Button onClick={() => handleCart(id)} className="py-4 w-[200px] mb-6 font-bold ">
            Add To Cart
          </Button>
        </div>
      </div>

      {/* continue browsering */}
      <div>
        <Link to={"/"}>
          <Button className="py-4 w-[343px] lg:mr-[23.6rem] justify-center mb-6 opacity-40 hover:opacity-50 ">
            Continue Browersing
          </Button>
        </Link>
        
      </div>

      {/* description */}
      <div className="flex flex-col flex-wrap">
        <div className="w-full flex justify-center">
          <div className="text-iphone-white text-5xl font-extrabold mb-8 flex justify-start lg:mr-[29.3rem] ">
            Description
          </div>
        </div>
        <div className="w-full flex justify-center flex-wrap ">
          <div className="text-iphone-white text-2xl text-left sm:w-[733px] mb-6">
            {description}
          </div>
        </div>
      </div>

      {/* review */}
      <div className="mb-48">
        <div className="w-full flex justify-center">
          <div className="text-iphone-white text-5xl font-extrabold mb-6 flex justify-start lg:mr-[35.3rem]">
            Reviews
          </div>

        </div>
          {id && <Review id={{id}} />}
        {/* reviews */}

      </div>

      {/* related product */}
      <div className="min-h-screen">
      <div  className='fade feartured-items min-h-screen   '>
        <div className='text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Books you may like
        </div>
            
        <div  className=''>

        
        <RelatedProducts Tags={Tags}/>
        </div>
      </div>

      </div>




    </div>
  ) : null;
}

export default Post;
