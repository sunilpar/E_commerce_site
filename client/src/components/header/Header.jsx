import React, { useState } from "react";
import { Button, Container, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/book_logo.png";
import conf from "../../conf/conf";
import Searchbar from "../search/Searchbar.jsx";
import { useMediaQuery } from "react-responsive";



function Header() {
  
  let IsSmall=(useMediaQuery({ maxWidth: 640 }))
  const authStatus = useSelector((state) => state.auth.status);
  const itemno = useSelector((state) => state.cart.productIds.length);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  
  const isAdmin = userData && userData.data._id == conf.adminId ? true : undefined;
  const navItems = [
    {
      name: "Add_book",
      slug: "/Addproduct",
      active: isAdmin,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <header className="z-50 sticky top-0 px-4 py-2 bg-gradient-to-b from-full-black to-transparent backdrop-blur-sm">
      <Container>
        <nav className="flex ">
          <div className="mr-2  display-block hover:scale-110 duration-150 inline-block min-w-[50px]">
            <Link to="/">
              <img src={logo} style={{ width: "50px" }} alt="logo" />
            </Link>
          </div>
          {!IsSmall&&<Searchbar /> }
                        
            {/* <form action="" className="flex opacity-0  sm:opacity-100 w-0 flex-row imvisible rounded-lg sm:w-full  ">
              <input type="text"  placeholder="Search" className=" px-3 py-2 rounded-l-full outline-none duration-200 w-full  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:bg-opacity-35   hover:duration-150 "/>
              <Button type="submit" className="rounded-r-full hover:bg-opacity-35"> 
              <svg className="" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" fill="#F5F5F7"></path> </g></svg>
              </Button>
            </form> */}


          <ul className="flex ml-auto">
            <li>
              <Link to="/cart">
                <button className="flex flex-row mx-2 inline-bock px-2 py-2 hover:duration-150 text-iphone-white hover:bg-iphone-black hover:text-black duration-200 rounded-lg">
                  <div className="flex flex-row">
                    <div>
                      <svg
                        width="25px"
                        height="fit"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="matrix(-1, 0, 0, 1, 0, 0)"
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
                            d="M2 3H4.5L6.5 17H17C18.1046 17 19 17.8954 19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19M9 5H21.0001L19.0001 11M18 14H6.07141M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                            stroke="#F5F5F7"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div>
                      <sub>{itemno}</sub>
                    </div>
                  </div>
                </button>
              </Link>
            </li>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock mx-2 px-4 py-2 hover:duration-150 text-iphone-white hover:bg-iphone-black hover:text-black duration-200 rounded-lg"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        {IsSmall&&<Searchbar />}
       
      </Container>
    </header>
  );
}

export default Header;
