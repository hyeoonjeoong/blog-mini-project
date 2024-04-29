import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../../assets/search.png";
import Search from "./Search";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const handleClickSearch = () => {
    setIsSearch(true);
  };
  return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <span>BlahBlog</span>
        </Link>
        <div>
          <img
            src={search}
            alt="search-icon"
            className="search"
            onClick={handleClickSearch}
          />
          <Link to="/write">
            <button>글 작성</button>
          </Link>
          <Link to="/myPage">
            <button>마이페이지</button>
          </Link>
        </div>
      </div>
      {isSearch && <Search />}
    </>
  );
};

export default Header;
