import React from "react";
import { Container, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/book_logo.png";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    
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
    <header className="py-3 shadow bg-gradient-to-r from-gov-blue to-gov-red">
      <Container>
        <nav className="flex ">
          <div className="mr-2  display-block hover:scale-110 duration-150 inline-block min-w-[50px]">
            <Link to="/">
              <img src={logo} style={{ width: "50px" }} alt="logo" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-4 py-2 hover:duration-150 text-gov-gray hover:bg-gov-gray hover:text-black duration-200 rounded-lg"
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
