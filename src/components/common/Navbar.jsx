import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import HomeIcon from "../../assets/img/logo1.svg";
import MainBg from "../../assets/img/Mask Group 15.png";
import Dropdown from "../../assets/img/dropdown.svg";
import SearchIcon from "../../assets/img/outline_search_black_48dp.svg";
import Search from "../common/Search";

import "../../assets/style.css";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav>
        <div class="home-icon">
          <i>
            <img
              src={HomeIcon}
              class="home-icon"
              alt="home-icon"
              onClick={() => dispatch(push("/"))}
            />
            <p class="around">
              Around
              <br />
              The World
            </p>
          </i>
        </div>
        <div class="right-nav">
          <img
            src={Dropdown}
            alt="dropdown"
            onClick={() => dispatch(push("/favourites"))}
          />
        </div>
      </nav>
      <div class="searchbar">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
