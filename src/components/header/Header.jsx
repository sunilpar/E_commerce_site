import React,{useState} from "react";
import { Container, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/book_logo.png";
import conf from "../../conf/conf";
import { use } from "react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  const isAdmin = userData && userData.$id == conf.adminId? true : undefined;
  const navItems = [
    {
      name: "Add product",
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
    <header className="py-3 ">
      <Container>
        <nav className="flex ">
          <div className="mr-2  display-block hover:scale-110 duration-150 inline-block min-w-[50px]">
            <Link to="/">
              <img src={logo} style={{ width: "50px" }} alt="logo" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            <li>
              <Link to="/cart" >
              <button className="flex flex-row inline-bock px-2 py-2 hover:duration-150 text-iphone-white hover:bg-iphone-black hover:text-black duration-200 rounded-lg">
                <div className="flex flex-row">


                  <div>
                  <svg width="25px" height="fit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 3H4.5L6.5 17H17C18.1046 17 19 17.8954 19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19M9 5H21.0001L19.0001 11M18 14H6.07141M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#F5F5F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </div>
                  <div>
                    <sub>1</sub>
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
                    className="inline-bock px-4 py-2 hover:duration-150 text-iphone-white hover:bg-iphone-black hover:text-black duration-200 rounded-lg"
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
      </Container>
    </header>
  );
}

export default Header;
