import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {dispatch(logout())});
        navigate("/")
    }
  return (
    <button className='inline-bock px-4 py-2 hover:duration-150 text-gov-gray hover:bg-gov-gray hover:text-black duration-200 rounded-lg' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn