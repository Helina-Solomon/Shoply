import React from "react";
import { signoutUserFailure, signoutUserStart, signoutUserSuccess } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logout } from "@mui/icons-material";
const SignOut = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);
const handleSignout = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch("/api/user/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutUserFailure(data.message));
        return;
      }
       
      dispatch(signoutUserSuccess(data));
      navigate('/')
    } catch (error) {
      dispatch(signoutUserFailure(error.message));
    }
  };
  return (
    <div className="">
      
      <span
        onClick={handleSignout}
        className=" cursor-pointer pl-1  pt-2 text-blue-800"
      >
        Log Out 
      </span>
    </div>
  );
};
export default SignOut