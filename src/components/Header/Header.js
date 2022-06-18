import React from "react";
import "../Header/Header.css";
import HederIcon from "../../images/airbnb12.png";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
// import { Link } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

function Header() {
  return (
    <Nav>
      <NavLink to="/">
        <img className="header--icon" src={HederIcon} alt="airbnb-icon" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="serch" activeStyle className="header--center">
          <input type="text" />
          <SearchIcon />
        </NavLink>
        <NavLink to="becomeHost" activeStyle>
          <p>Become a host</p>
        </NavLink>
        <NavLink to="avatar" activeStyle>
          <Avatar />
        </NavLink>
        <NavLink to="public" activeStyle>
          <PublicIcon />
        </NavLink>
        <NavLink to="expand" activeStyle>
          <ExpandMoreIcon />
        </NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Header;
