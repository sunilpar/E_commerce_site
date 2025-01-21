// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import service from "../backend/config";
// import reviewService from "../backend/review";
// import { useSelector, useDispatch } from "react-redux";


// function Test() {
//   const userdata = useSelector((state) => state.auth.userData);
//   console.log(userdata.data._id, "logged in user id");

//   const fetchData = async () => {
//     const ProductId="6788a107badcf841e13f4a2d";
//     const comment="i have read this 5 times now so 5 star it is ";
//     const star="5";
//     const getproducts = await reviewService.createReview({ProductId,star,comment})
//       console.log(getproducts,"getproducts");
//   }


//   return (
//     <div className="text-iphone-white">
//       Test
//       <button
//         className="bg-iphone-black text-iphone-white m-5"
//         onClick={fetchData}
//       >
//         fetch data
//       </button>

//       <ToastContainer position="bottom-right" theme="dark" />
//     </div>
//   );
// }

// export default Test;








import React, { useState } from 'react';

function StarRating({ onRatingChange }) {
  const [rating, setRating] = useState(0); // Current rating value

  // Function to handle clicking on a star
  const handleStarClick = (value) => {
    setRating(value); // Update rating
    if (onRatingChange) {
      onRatingChange(value); // Notify parent component of rating change
    }
  };

  // Function to generate star icons
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{
            cursor: 'pointer',
            color: i <= rating ? '#FFD700' : '#E0E0E0', // Gold for selected stars, gray for others
            fontSize: '24px',
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      <div style={{ display: 'inline-flex', gap: '5px' }}>{renderStars()}</div>
      <div style={{ marginTop: '8px', fontSize: '16px' }}>
        Rating: {rating} / 5
      </div>
    </div>
  );
}

export default StarRating;

