import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>blog-mini-project</div>
      <div>
        <Link to="/write">
          <button>글 작성</button>
        </Link>
        <Link to="/mypage">
          <button>마이페이지</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
