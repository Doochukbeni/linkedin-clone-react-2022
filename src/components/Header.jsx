import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import {
  BusinessCenter,
  Chat,
  Notifications,
  SupervisorAccount,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

const Header = () => {
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="./icons8-linkedin-circled-48.png" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption onClick={logOutOfApp} avatar={true} title="Me" />
      </div>
    </div>
  );
};

export default Header;
