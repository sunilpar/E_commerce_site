import React,{useState,useEffect} from 'react'
import reviewService from '../../backend/review'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Button from '../Button';
import { use } from 'react';

function Review({id}) {
   const [review, setReview] = useState([]);
  let ProductId ="";
  // const userdata = useSelector((state) => state.auth.userData);
  // console.log(userdata.data._id);
  useEffect(() => {
    (async () => {
      if (!id) {
        return;
      }
      ProductId = id.id;
      try {
        const getreviews = await reviewService.getReviews(ProductId);
        setReview(getreviews.data);
      } catch (error) {
        console.error("Error while getting reviews:", error);
      }
    })();
  }, []);
  if (ProductId) {
    console.log(review,"review");
  }
  
  

  
  

  return (
    <div className='text-iphone-white'>Review</div>
  )
}

export default Review