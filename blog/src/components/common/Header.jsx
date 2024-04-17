import React from "react";
import { Link } from "react-router-dom";
import search from "../../assets/search.png";

const Header = () => {
  const handleClickSearch = () => {
    alert("검색 버튼 클릭");
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
    </>
  );
};

export default Header;
