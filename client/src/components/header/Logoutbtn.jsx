import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../backend/auth.js";
import { logout } from "../../store/authslice.js";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
    navigate("/");
  };
  return (
    <button
      className="inline-bock px-4 py-2  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-150 hover:duration-150 rounded-lg"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
