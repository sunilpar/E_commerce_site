import React, { useEffect, useState } from "react";
import AxiosHelper from "../utils/axios.helper";
import { ToastContainer, toast } from "react-toastify";
import service from "../backend/config";
import Search from "../pages/Search";

function Test() {
//   // const fetchData = async () => {
//   //   const getproduct = await service.getProduct("6788c83e647ed14ed5b57899")
//   //   console.log(getproduct.data.avgstar,"star");
//   //   console.log(getproduct.data.product.Title,"Title");
//   //   console.log(getproduct.data.product.CoverImage,"CoverImage");
//   //   console.log(getproduct.data.product.Description,"Description");
//   //   console.log(getproduct.data.product.Pdf,"Pdf");
//   //   console.log(getproduct.data.product.Audio,"Audio");

//   // };

//   // const fetchData = async () => {
//   //   const productTitles=["A Game of Thrones",
//   //     "A Clash of Kings",
//   //     "A Storm of Swords",
//   //     "A Feast for Crows",
//   //     "A Dance with Dragons",
//   //     "The Silmarillion",
//   //     "The Hobbit",
//   //     "The Fellowship Of The Ring",
//   //     "The Two Towers",
//   //     "The Return Of The King",
//   //     "Harry Potter and the Sorcerer's Stone",
//   //     "Harry Potter and the Chamber of Secrets",
//   //     "Harry Potter and the Prisoner of Azkaban",
//   //     "Harry Potter and the Goblet of Fire" ] ;
//   //     const strTitles = productTitles.map(item => `"${item}"`).join(',');

//   //   const getproducts = await service.getProducts(strTitles)
//   //   console.log(getproducts.data.length,"length");
//   //   getproducts.data.map((data)=>console.log(data.Title))
//   // }

//   // const fetchData = async () => {
//   //   const query="Harry";
//   //   const getproducts = await service.searchProductWithSuggestion(query)
//   //   getproducts.data.map((data)=>console.log(data.Title))
//   // }

//   // const fetchData = async () => {
//   //   const query = "horror";
//   //   const products = await service.searchPage(query);
//   //   products.data.map((data) => console.log(data.Title));
//   // };
  

//   // const fetchData = async () => {
//   //   const featured=["6788b1fe647ed14ed5b5784a","67878d973f9a6e7a8cd9cce9","67874e7eacb303d2c6ec8aa4","6788b0d3647ed14ed5b5783e"];
//   //   const strTitles = Array.isArray(featured)
//   // ? featured.map(item => `"${item}"`).join(',')
//   // : featured;

//   //   const getproducts = await service.getProductsByid(strTitles)
//   //   console.log(getproducts.data.length,"length");
//   //   getproducts.data.map((data)=>console.log(data.Title))
//   // }


  
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  // const fetchData = () => {
  //   setShowSearch(true);
  // };
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowSearch(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };
  return (
    <div className="text-iphone-white">
      Test
      {/* <button
        className="bg-iphone-black text-iphone-white m-5"
        onClick={fetchData}
      >
        fetch data
      </button> */}


      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 text-iphone-black">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter search term..."
        className="px-4 py-2 border rounded-md w-64"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-iphone-white rounded-md"
      >
        Search
      </button>
    </form>
      
      {showSearch && query && <Search query={query} />}
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default Test;






// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import Search from "../pages/Search";

// function Test() {  
//   const [query, setQuery] = useState('');           
//   const [submittedQuery, setSubmittedQuery] = useState('');  

 
//   const handleInputChange = (e) => {
//     setQuery(e.target.value); 
//   };

  
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (query.trim() === '') {
//       toast.error("Search query cannot be empty.");
//       return;
//     }

//     setSubmittedQuery(query);  
//     // toast.success(`searched for "${query}"...`);
//   };

//   return (
//     <div className="text-iphone-white">
//       <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 text-iphone-black">
//         <input
//           type="text"
//           value={query}
//           onChange={handleInputChange}
//           placeholder="Enter search term..."
//           className="px-4 py-2 border rounded-md w-64"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-iphone-white rounded-md"
//         >
//           Search
//         </button>
//       </form>

      
//       {submittedQuery && <Search query={submittedQuery} />}

//       <ToastContainer position="bottom-right" theme="dark" />
//     </div>
//   );
// }

// export default Test;


