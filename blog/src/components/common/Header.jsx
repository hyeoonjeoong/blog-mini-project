import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../../assets/search.png";
import Search from "../../pages/Search";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <span>BlahBlog</span>
        </Link>
        <div>
          <Link to="search">
            <img src={search} alt="search-icon" className="search" />
          </Link>
          <Link to="/write">
            <button>글 작성</button>
          </Link>
          <Link to="/myPage">
            <button>마이페이지</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
