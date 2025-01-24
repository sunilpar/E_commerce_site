import React, { useState } from "react";
import { Button, Container, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/book_logo.png";
import conf from "../../conf/conf";
import Searchbar from "../search/Searchbar.jsx";
import { useMediaQuery } from "react-responsive";
import Userprofile from "./userprofile.jsx";



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
                <Userprofile />
                {/* <LogoutBtn /> */}
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
